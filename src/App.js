import { useState} from 'react'
// import './App.css'
import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

import styled, { ThemeProvider } from 'styled-components'

const lightTheme = {
  pageBackground: "white",
  pageBackground2: "#eee",
  titleColor: "#333",
}

const darkTheme = {
  pageBackground: "#333",
  pageBackground2: "#111",
  titleColor: "white",
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppBody >
        <Banner theme={theme} setTheme={setTheme} />
        <AboutMe />
        <Projects />
        <ContactForm />
        <Footer />
      </AppBody>
    </ThemeProvider>
  );
}

export default App

const AppBody = styled.main`
    scroll-snap-type: mandatory;
    overflow: auto;
    height: 100vh;
`
