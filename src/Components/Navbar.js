import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { navList } from '.././sourceData/data'
import Lee_Logo from '.././images/Nurmalee-Logo-3.png'
import { ImCancelCircle } from 'react-icons/im'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMenu } from 'react-icons/ai'


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

    const handleNavToggle = () => {
        setShowList(!showList)
    }

    return (
        <nav className="navbar">
            <div className="navbar-buttons">
                <img className="lee-logo" src={Lee_Logo} alt="LEE"/>
                {showList ? <ImCancelCircle className="navbar-icon" onClick={handleNavToggle} /> : <AiOutlineMenu className="navbar-icon" onClick={handleNavToggle} /> }
            </div>

            <div className= "navbar-list-container" ref={navbarListContainerRef}>
                <ul className="navbar-list" ref={navbarListRef}>
                    {
                        navList.map(({id, title, href}) => {
                         return <li className="list-item" key={id}> <a href={href}>{title}</a> </li>
                        })
                    }
                </ul>
            </div>

            <div className="social-list">
                <FiGithub className="navbar-icon"/>
                <AiOutlineInstagram className="navbar-icon"/>
                <FiTwitter className="navbar-icon"/>
                <AiOutlineYoutube className="navbar-icon"/>
            </div> 
        </nav>
    )
}

export default Navbar