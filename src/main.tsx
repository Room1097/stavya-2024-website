import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/providers/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </ThemeProvider>
)
