import React from 'react'
import './App.css'
import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="app">
      <Banner />
      <AboutMe />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App
