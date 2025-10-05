# 🃏 Anime Card Comparator

This project is a fun web app that lets you compare character cards from **Naruto**, **One Piece**, and **Bleach** universes.  
Users can select cards, compare them based on chosen metrics, and see the winner with animations.  
The app uses **Zustand** for state management and **Zod** for data validation.

## Screenshot


![cart-comparator](https://github.com/user-attachments/assets/420a14dd-324d-47df-8964-4fa7fa26241b)




## 🚀 Features

- ⚡ **Real-time Comparison:**  
  Select two cards and click **Compare** to determine the winner based on `rating`, `speed`, or `price`.

- 💾 **Category-based Data Loading:**  
  Each anime (Naruto, One Piece, Bleach) loads its data from separate JSON files dynamically.

- 🧩 **Global State with Zustand:**  
  Handles selected cards, metrics, reverse mode, winners, categories, and UI state globally.

- 🔄 **Reverse Mode:**  
  When enabled, **lower values win** (for example, a cheaper `price` wins).

- 🧠 **Data Validation with Zod:**  
  JSON files are validated using Zod schemas before being used in the app.  
  If validation fails, a Snackbar warning appears.

- 🏆 **Animated Winner Card:**  
  The winning card is highlighted with a green border and smooth animations.

- 🎨 **Material UI (MUI) + Framer Motion:**  
  Provides a clean design and fluid animations.

## 🛠️ Technologies Used

| Technology | Description |
|-------------|-------------|
| ⚛️ **React** | Frontend framework |
| 🧱 **Zustand** | Lightweight state management |
| 🎨 **Material UI (MUI)** | UI components library |
| 💫 **Framer Motion** | Animations and transitions |
| 🔍 **Zod** | Schema validation for JSON data |
| 📦 **Vite** | Fast development and build tool |


## 🎮 How to Play

### 1️⃣ Selecting Cards
- You can select **two cards at a time**.  
- When a card is selected, its **border turns red** and the button text changes to **“Selected”**.

### 2️⃣ Comparing
- After selecting two cards, click **Compare**.  
- The **winning card** will show a **green border** and play a **bounce animation**.  
- If both cards have equal values, both will display a **“DRAW”** label.

### 3️⃣ Reverse Mode
- When **Reverse Mode** is on, **smaller values win** (for example, a lower price wins).  
- The switch in the navbar toggles this mode.

### 4️⃣ Switching Categories
- Use the navbar buttons to switch between:
  - 🌀 **Naruto**
  - ☠️ **One Piece**
  - ⚔️ **Bleach**

