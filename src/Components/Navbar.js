import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { navList } from '.././sourceData/data'
import Lee_Logo from '.././images/1x/logo_2_black.png'

import { FiTwitter, FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai'


function Navbar() {
    const [showList, setShowList] = useState(false)
    const navbarListContainerRef = useRef('')
    const navbarListRef = useRef('')
    const windowWidth = window.innerWidth;

    useEffect(() => {
        const listWidth = navbarListRef.current.getBoundingClientRect().width
        if(showList){
            navbarListContainerRef.current.style.width = `${listWidth}px`
        }
        else {
            navbarListContainerRef.current.style.width = '0px'
        }
    }, [showList, windowWidth])

    return (
        <Nav>
            <NavHeader>
                <img src={Lee_Logo} alt="LEE"/>
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
                         return <li className="list-item" key={index}> <a href={href} onClick={() => setShowList(false)} >{title}</a> </li>
                        })
                    }
                </ul>
            </NavListContainer>

            <SocialList>
                <li><a href="#about"> <MyGithub /> </a></li>
                <li><a href="#about"> <MyInstagram /> </a></li>
                <li><a href="#about">  <MyTwitter /> </a></li>
                <li><a href="#contactme">  <MyYoutube /> </a></li> 
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
`

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: black;
    transition: 1000ms;

    > img {
        height: 60px;
    }

    > div {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        cursor: pointer;

        > p {
            font-family: 'Abel', sans-serif;
            font-weight: 900;
            font-size: 20px;
            margin-right: 5px;
        }
    }
       
`

const NavListContainer = styled.div`
    overflow: hidden;
    background-color: white;
    transition: 500ms;
    box-shadow: 0 0 30px #777;
    border-left: 2px solid darkred;
    width: auto;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;

    > ul {
        list-style: none;
        width: 350px;
        text-align: center;
        padding: 0;

        > li {
            position: relative;

            > a {
                text-decoration: none;
                border-top: 1px solid #eee;
                color: black;
                padding: 13px 0;
                display: block;
                width: 100%;
                font-family: 'Abel', sans-serif;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: center;
                text-transform: capitalize;
                transition: 500ms;
            }

            &:last-of-type > a {
                border-bottom: 1px solid #eee;
            }

            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 2px;
                width: 0;
                background-color: darkred;
                transition: 1000ms;
            }

            &:nth-of-type(odd)::after {
                left: auto;
                right: 0;
            }

            &:hover::after {
                width: 80%;
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
    color: black;
`

const CloseMenuBtn = styled(AiOutlineArrowRight)`
    height: 25px;
    width: 25px;
    color: black;
    cursor: pointer;
    margin: 20px;
`

const MyTwitter = styled(FiTwitter)`
    margin: 10px;
    cursor: pointer;
    transition: 500ms;
`

const MyInstagram = styled(AiOutlineInstagram)`
    margin: 10px;
    cursor: pointer;
    transition: 500ms;
`

const MyYoutube = styled(AiOutlineYoutube)`
    margin: 10px;
    cursor: pointer;
    transition: 500ms;
`

const MyGithub = styled(FiGithub)`
    margin: 10px;
    cursor: pointer;
    transition: 500ms;
`

