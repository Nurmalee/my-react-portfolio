import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactForm from './Components/ContactForm'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import MyServices from './Components/MyServices'

const lightTheme = {
  background: "rgb(250,250,250)",
  title: "#333",
  shadow: "#eee",
  bannerOverlayDim: "rgba(35, 0, 0, 0.6)",
  navBackgroundDim: "rgb(250,250,250)" 
}

const darkTheme = {
  background: "#333",
  title: "rgb(250,250,250)",
  shadow: "#111",
  bannerOverlayDim: "rgba(35, 0, 0, 0.8)",
  navBackgroundDim: "rgb(225,225,225)" 
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {

  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppBody >
        <Navbar theme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <Banner />
        <AboutMe />
        <MyServices />
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
