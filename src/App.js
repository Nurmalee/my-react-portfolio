import React from 'react'
import './App.css'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
// import InputToArray from './Components/InputToArray'

function App() {

  return (
    <div className="app">
      <Banner />
      <Projects />
      <Technologies />
      {/* <InputToArray /> */}
    </div>
  );
}

export default App
