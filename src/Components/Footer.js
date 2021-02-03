import React, { useEffect, useRef } from 'react'
import './Footer.css'

function Footer() {
    const yearRef = useRef(null)
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <div className="footer">
            <h3>Copyright &copy; THE-LEE-EFFECT <span className="year" ref={yearRef}></span> </h3>
            <p>All Rights Reserved</p>           
        </div>
    )
}

export default Footer
