import React from 'react'
import './App.css'
import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="app">
      <Banner />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App
