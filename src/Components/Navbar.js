import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { navList } from '.././sourceData/data'
import logo_black from '.././images/1x/logo_2_black.png'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { AiTwotoneWarning } from 'react-icons/ai'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMenu } from 'react-icons/ai'

let logo = logo_black

function Navbar(props) {

    const [showList, setShowList] = useState(false)
    const navbarListContainerRef = useRef('')
    const navbarListRef = useRef('')
    const navbarRef = useRef('')

    const toggleTheme = () => {
        if(props.theme === 'light'){
            props.setCurrentTheme('dark')
        } else {
            props.setCurrentTheme('light')
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
                <ul ref={navbarListRef}>
                    {
                        navList.map(({title, href}, index) => {
                         return <li className="list-item" key={index}> <a href={href} onClick={() =>  setShowList(false)} > {title} </a> </li>
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
                <li><a href="https://github.com/Nurmalee"> <FiGithub style={socialStyle} /> </a></li>
                <li><a href="https://instagram.com/thecodedlee"> <AiOutlineInstagram style={socialStyle} /> </a></li>
                <li><a href="https://twitter.com/nurmanteasy">  <FiTwitter style={socialStyle} /> </a></li>
                <li><a href="https://youtube.com/nurudeenlawal">  <AiOutlineYoutube style={socialStyle} /> </a></li> 
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
    background-color: ${props => props.theme.navBackgroundDim};
    box-shadow: 0 0 20px #444;
    transition: 500ms;
`

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: black;

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
            color: ${props => props.theme.title};
            color: #333;
            transition: 500ms;
        }
    }
       
`

const NavListContainer = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme.background};
    transition: 200ms;
    border-left: 1px solid ${props => props.theme.title};
    width: auto;
    height: 100%;
    position: fixed;
    z-index: 100;
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
                color: ${props => props.theme.title};
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
                    background-color: brown;
                    color: white;
                    padding-left: 20px;
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
    top: 50%;
    left: -35px;
    transform: translateY(-50%);
    border-right: 7px solid brown;
    background-color: rgba(68, 68, 68, 0.9);
    padding: 5px 0px 5px 2px ;
    display: flex;
    flex-direction: column;
    color: white;
    transition: 500ms;
    z-index: 5;

    &:hover {
        left: 0;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.9);
    }

    > li {
        :hover {
            background-color: #333;
        }

        > a {
           text-decoration: none;
           color: white;
       
    
            :hover {
                color: red;
            }
        }
    }
    
`

const OpenMenuBtn = styled(AiOutlineMenu)`
    height: 25px;
    width: 25px;
    color: ${props => props.theme.title};
    color: #333;
    transition: 500ms;
`

// TOGGLE CONTAINER, BUTTTON AND CONCERNS
const Toggler = styled.div`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.title};
    transition: 500ms;
    font-family: 'Abel', sans-serif;
    font-size: 14px;
    font-weight: 900;
    margin-top: 2px;
    padding: 10px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: flex-start;
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

