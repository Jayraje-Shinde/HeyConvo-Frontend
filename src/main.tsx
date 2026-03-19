import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@/app/mui'
import App from '@/app/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />        {/* resets browser defaults, applies dark/light bg */}
      <App />
    </ThemeProvider>
  </StrictMode>
)