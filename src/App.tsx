import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function selectTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar selectTheme={selectTheme}/>
        <main>
          <About />
          <Projects />
        </main>

      </Container>
    </ThemeProvider>
  )
}

export default App
