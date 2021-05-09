import { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
// import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactForm from './Components/ContactForm'
// import Footer from './Components/Footer'

import styled, { ThemeProvider } from 'styled-components'
import BannerLee from './Components/BannerLee'
import FooterNew from './Components/FooterNew'
import MyServices from './Components/MyServices'

const lightTheme = {
  background: "rgb(250,250,250)",
  title: "#333",
  shadow: "#eee"
}

const darkTheme = {
  background: "#333",
  title: "rgb(250,250,250)",
  shadow: "#111"
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
        <BannerLee />
        <AboutMe />
        <MyServices />
        <Projects />
        <ContactForm />
        <FooterNew />
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
