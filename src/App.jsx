import { useEffect } from "react"
import { Container, Grid, Box, Snackbar, Alert } from "@mui/material"
import Slide from "@mui/material/Slide"
import { useStore } from "./store"
import Navbar from "./Navbar.jsx"
import Card from "./Card.jsx"

function SlideTransition(props) {
  return <Slide {...props} direction="up" />
}

export default function App() {
  const {
    data,
    selected,
    toggleSelect,
    clearSelection,
    metric,
    reverse,
    snackbar,
    closeSnackbar,
    loadCategoryData,
  } = useStore()

  const { winnerId, drawIds, setWinner, setDraw } = useStore() // yeni ekliyoruz

  useEffect(() => {
    loadCategoryData("naruto")
  }, [])

  const handleCompare = () => {
    if (selected.length < 2) return
    const [c1, c2] = selected.map((id) => data.find((c) => c.id === Number(id)))
    if (!c1 || !c2) return

    let val1 = c1[metric]
    let val2 = c2[metric]

    if (val1 === val2) {
      setDraw([c1.id, c2.id])
    } else if ((val1 > val2 && !reverse) || (val1 < val2 && reverse)) {
      setWinner(c1.id)
    } else {
      setWinner(c2.id)
    }

    clearSelection()
  }

  if (!data) return null

  return (
    <Box sx={{ bgcolor: "#c1bcbcff", minHeight: "100vh", pb: 4, pt: 4 }}>
      <Navbar onCompare={handleCompare} />

      <Container sx={{ mt: 14 }}>
        <Grid container spacing={4} justifyContent="center">
          {data.map((c) => {
            const isSelected = selected.includes(String(c.id))
            const isWinner = winnerId === c.id
            const isDraw = drawIds.includes(c.id)
            const hasCompared = isWinner || isDraw

            return (
              <Grid item xs={10} sm={6} md={4} lg={3} key={c.id}>
                <Card
                  card={c}
                  isSelected={isSelected}
                  hasCompared={hasCompared}
                  isWinner={isWinner}
                  isDraw={isDraw}
                  onSelect={toggleSelect}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {snackbar && (
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={closeSnackbar}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity="warning"
            variant="filled"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              bgcolor: "#ff9800",
              color: "black",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            ⚠️ {snackbar.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  )
}
