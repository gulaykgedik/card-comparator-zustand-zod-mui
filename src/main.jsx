import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
      background: {
      default: "#c1bcbcff", // tüm sayfa arkaplanı
    },
    mode: 'light',
    primary: {
      main: '#5d6165ff', // Gri ton
    },
    secondary: {
      main: '#c799cfff', // Mor ton
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
