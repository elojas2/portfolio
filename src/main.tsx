import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './pages/Home/sections/Hero/Hero.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <CssBaseline/>
      <Hero/>

    </ThemeProvider>

  </React.StrictMode>,
)
