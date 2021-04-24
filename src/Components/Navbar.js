import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { navList } from '.././sourceData/data'
import logo_black from '.././images/1x/logo_2_black.png'
// import logo_white from '.././images/1x/logo_2_white.png'

import { FiTwitter, FiGithub } from 'react-icons/fi'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { AiTwotoneWarning } from 'react-icons/ai'



import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai'

let logo = logo_black

function Navbar(props) {

    const [showList, setShowList] = useState(false)
    const navbarListContainerRef = useRef('')
    const navbarListRef = useRef('')
    const navbarRef = useRef('')

    const toggleTheme = () => {
        if(props.theme === 'light'){
            props.setCurrentTheme('dark')
            // logo = logo_white
        } else {
            props.setCurrentTheme('light')
            // logo = logo_black
        }
    }

    const socialStyle = {
        margin: "10px",
        cursor: "pointer",
        transition: "500ms",
    }

    useEffect(() => {
        const listWidth = navbarListRef.current.getBoundingClientRect().width
        if(showList){
            navbarListContainerRef.current.style.width = `${listWidth}px`
        }
        else {
            navbarListContainerRef.current.style.width = '0px'
        }
    }, [showList])

    const handleLinkClick = (e) => {
        setShowList(false)

        // e.preventDefault()

        const target = e.target.getAttribute('href');
        const element = document.querySelector(target)
        const toLocation = document.querySelector(target).offsetTop
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        console.log(target, element, toLocation, navbarHeight);
        
        window.scrollTo({
            left: 0,
            top: toLocation - navbarHeight
        });
    }

    return (
        <Nav>
            <NavHeader ref={navbarRef}>
                <img src={logo} alt="LEE"/>
                <div onClick={() => setShowList(!showList)}>
                    <p>menu</p>
                    <OpenMenuBtn />
                </div>
            </NavHeader>

            <NavListContainer ref={navbarListContainerRef}>
                <CloseMenuBtn onClick={() => setShowList(!showList)} />
                <ul ref={navbarListRef}>
                    {
                        navList.map(({title, href}, index) => {
                         return <li className="list-item" key={index}> <a href={href} onClick={handleLinkClick} > {title} </a> </li>
                        })
                    }
                    <Toggler>
                        <AiTwotoneWarning style={{height: "30px", width: "30px", color: "orange"}}/>
                        dark theme( test mode )
                        {props.theme === 'light' ? <ToggleOffBtn onClick={toggleTheme} /> : <ToggleOnBtn onClick={toggleTheme} />}
                    </Toggler>
                </ul>
                
            </NavListContainer>

            <SocialList>
                <li><a href="#a"> <FiGithub style={socialStyle} /> </a></li>
                <li><a href="#a"> <AiOutlineInstagram style={socialStyle} /> </a></li>
                <li><a href="#a">  <FiTwitter style={socialStyle} /> </a></li>
                <li><a href="#a">  <AiOutlineYoutube style={socialStyle} /> </a></li> 
            </SocialList>

        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: white;
    box-shadow: 0 0 20px teal;
`

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: black;
    transition: 1000ms;

    > img {
        height: 50px;
    }

    > div {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        cursor: pointer;

        > p {
            font-family: 'Antonio', sans-serif;
            font-weight: 900;
            font-size: 18px;
            margin-right: 5px;
            color: ${props => props.theme.titleColor};
            color: #333;
            transition: 500ms;
        }
    }
       
`

const NavListContainer = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme.pageBackground};
    transition: 500ms;
    box-shadow: 0 0 20px #333;
    /* border-left: 2px solid darkred; */
    width: auto;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;

    > ul {
        list-style: none;
        width: 300px;
        text-align: center;
        padding: 0;

        > li {
            position: relative;

            > a {
                text-decoration: none;
                border-top: 1px solid #eee;
                color: ${props => props.theme.titleColor};
                padding: 13px;
                display: block;
                width: 100%;
                font-family: 'Abel', sans-serif;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: left;
                text-transform: capitalize;
                transition: 1000ms;

                &:hover {
                    background-color: teal;
                    color: white;
                    padding-left: 50px;
                }
              
            }

            &:last-of-type > a {
                border-bottom: 1px solid #eee;
            }
        } 
       
    }

`

const SocialList = styled.ul`
    list-style: none;
    position: fixed;
    top: 15.5rem;
    left: -35px;
    border-right: 2px solid white;
    background-color: rgba(68, 68, 68, 0.9);
    padding: 5px 7px 0 2px ;
    display: flex;
    flex-direction: column;
    color: white;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1;

    &:hover {
        left: 0;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.9);
    }

    > li > a {
       text-decoration: none;
       color: white;

        :hover {
            color: red;
        }
    }
`

const OpenMenuBtn = styled(AiOutlineMenu)`
    height: 25px;
    width: 25px;
    color: ${props => props.theme.titleColor};
    color: #333;
    transition: 500ms;
`

const CloseMenuBtn = styled(AiOutlineArrowRight)`
    height: 25px;
    width: 25px;
    color: ${props => props.theme.titleColor};
    cursor: pointer;
    margin: 20px;
`

// TOGGLE CONTAINER, BUTTTON AND CONCERNS
const Toggler = styled.div`
    color: ${props => props.theme.pageBackground};
    background-color: ${props => props.theme.titleColor};
    transition: 500ms;
    font-family: 'Abel', sans-serif;
    font-size: 14px;
    font-weight: 900;
    margin-top: 2px;
    padding: 10px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    width: 100%;
`

const ToggleOffBtn = styled(BsToggleOff)`
    margin-left: 10px;
    height: 30px;
    width: 30px; 
    cursor: pointer;
`

const ToggleOnBtn = styled(BsToggleOn)`
    margin-left: 10px;
    cursor: pointer;
    height: 30px;
    width: 30px; 
`

