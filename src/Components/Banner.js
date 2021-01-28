import React, { useState, useEffect } from 'react'
import './Banner.css'
import Navbar from './Navbar'

function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
            if(window.innerWidth < 900) {
               
            }
        })
    }, [windowWidth])
    
    return (
        <div className="banner" id="about-me">
            {/* <h5>{windowWidth} px </h5> */}
            <Navbar />
            <div className="profile">
                <h1>lawal nurudeen</h1>
                <p className="profile-summary">
                 Javascript is the now and the future. I am a javascript/react front end developer and in fact, this portfolio of projects was made with react js and is frequently updated. It showcases the flexibility of functional components with a bunch of use cases for the most commonly used react hooks. Click any of the buttons below to uncover more....
                </p>
                <div className="profile-buttons">
                    <button>discover more</button>
                    <button>view my CV</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
