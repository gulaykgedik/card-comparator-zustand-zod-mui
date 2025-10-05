// src/store.js
import { create } from "zustand"
import { z } from "zod"

// ---- Zod Şeması ----
const CardSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  rating: z.number(),
  price: z.number(),
  speed: z.number(),
})

const CardsSchema = z.array(CardSchema)

export const useStore = create((set, get) => ({
  data: [],
  selected: [],
  winnerId: null,
  drawIds: [],
  metric: "rating",
  reverse: false,
  filterCategory: "naruto",
  sortBy: "rating_desc",
  snackbar: null,
  zodErrors: [],

  setData: (cards) => set({ data: cards }),
  
  toggleSelect: (id) => {
    const { selected, winnerId, drawIds } = get()
    // Eğer önceden kazanan veya draw varsa, yeni seçimle sıfırla
    if (winnerId || drawIds.length) {
      set({ winnerId: null, drawIds: [], selected: [] })
    }

    if (selected.includes(id)) {
      set({ selected: selected.filter((s) => s !== id) })
      return
    }
    if (selected.length >= 2) {
      set({ snackbar: { open: true, message: "Sadece 2 kart seçebilirsiniz." } })
      return
    }
    set({ selected: [...selected, id] })
  },

  clearSelection: () => set({ selected: [] }),
  setMetric: (m) => set({ metric: m }),
  setReverse: (b) => set({ reverse: b }),
  setFilterCategory: (c) => set({ filterCategory: c }),
  setSortBy: (s) => set({ sortBy: s }),
  openSnackbar: (message) => set({ snackbar: { open: true, message } }),
  closeSnackbar: () => set({ snackbar: null }),

  loadCategoryData: async (category) => {
    try {
      const res = await fetch(`/data/${category}.json`)
      const json = await res.json()
      const parsed = CardsSchema.safeParse(json)
      if (!parsed.success) {
        set({ zodErrors: parsed.error.issues })
        get().openSnackbar("Veri doğrulama hatası! (Zod)")
        return
      }
      set({
        data: parsed.data,
        filterCategory: category,
        selected: [],
        winnerId: null,
        drawIds: [],
        zodErrors: [],
      })
    } catch (err) {
      console.error("Veri yükleme hatası:", err)
      get().openSnackbar("Veri yüklenemedi!")
    }
  },

  score: 0,
incrementScore: (points = 1) => set((state) => ({ score: state.score + points })),
resetScore: () => set({ score: 0 }),

  compare: () => {
    const { selected, data, metric, reverse } = get()
    if (selected.length < 2) return

    const [c1, c2] = selected.map((id) => data.find((c) => c.id === Number(id)))
    if (!c1 || !c2) return

    if (c1[metric] === c2[metric]) {
      set({ drawIds: [c1.id, c2.id], winnerId: null })
    } else if ((c1[metric] > c2[metric] && !reverse) || (c1[metric] < c2[metric] && reverse)) {
      set({ winnerId: c1.id, drawIds: [] })
    } else {
      set({ winnerId: c2.id, drawIds: [] })
    }
    if (c1[metric] !== c2[metric]) {
  get().incrementScore(10) // her kazanç 10 puan
}
    set({ selected: [] })
  },
}))
