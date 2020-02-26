import React from 'react'
import { ThemeProvider } from 'styled-components'

import Router from './router/Router'
import theme from './styles/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
