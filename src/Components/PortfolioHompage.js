import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './PortfolioHomepage.css'

function PortfolioHompage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    
    return (
        <div className="portfolio-homepage">
            <h5>{windowWidth} px </h5>
            <Navbar />
        </div>
    )
}

export default PortfolioHompage
