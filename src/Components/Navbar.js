import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import Lee_Logo from '.././images/Nurmalee-Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineGithub, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai'

function Navbar() {
    const [showList, setShowList] = useState(false)
    const navbarListContainerRef = useRef(null)
    const navbarListRef = useRef(null)

    useEffect(() => {
        const listHeight = navbarListRef.current.getBoundingClientRect().height
        if(showList){
            navbarListContainerRef.current.style.height = `${listHeight}px`
        }
        else {
            navbarListContainerRef.current.style.height = '0px'
        }
    }, [showList])

    return (
        <nav className="navbar">
            <div className="navbar-buttons">
                <img className="lee-logo" src={Lee_Logo} alt="LEE"/>
                <GiHamburgerMenu className="navbar-icon" onClick={() => setShowList(!showList)} />
            </div>

            <div className= "navbar-list-container" ref={navbarListContainerRef}>
                <ul className="navbar-list" ref={navbarListRef}>
                    <li className="list-item"><a href="#about-me">about me</a></li>
                    <li className="list-item"><a href="#technologies">technologies</a></li>
                    <li className="list-item"><a href="#projects">projects</a></li>
                    <li className="list-item"><a href="#contact-me">contact me</a></li>
                </ul>
            </div>

            <div className="social-list">
                <AiOutlineGithub className="navbar-icon"/>
                <AiOutlineInstagram className="navbar-icon"/>
                <AiFillTwitterSquare className="navbar-icon"/>
            </div>
            
        </nav>
    )
}

export default Navbar
