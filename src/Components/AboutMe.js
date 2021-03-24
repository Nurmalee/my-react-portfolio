import React from 'react'
import './AboutMe.css'
import me from '.././images/me.jpg'
// import Technology from './Technology'
import Technologies from './Technologies'


function AboutMe() {

    return (
        <section className="about-me" id="about">
            <h1>About Me</h1>
            <div className="underline"></div>
            
            <div className="about-info">
                <img src={me} alt="Nurudeen Lawal" />
                {/* <p className="info"> I am theCodedLee </p> */}
                <Technologies />
            </div>
            {/* <a href="#home" > ddsd </a> */}
        </section>
    )
}

export default AboutMe
