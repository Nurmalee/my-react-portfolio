import { useEffect, useRef } from 'react'
import './extended.css'
import styled from 'styled-components'
import logo_letterN from '../images/1x/logo_letterN.png'

import { FiTwitter, FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

function Footer(props) {
    const yearRef = useRef(null)
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <FooterWrapper >

            <FooterLists>

                <div>
                    <h3> Contact information </h3>
                    <p>You can reach out to me anytime via email or phone, although most preferrably email since we may have considerable time differences</p>
                     <br/>
                    <p> <small>email: thecodedlee.lee@gmail.com</small> </p>
                    <p> <small> p: +234 816 480 0735; +234 907 576 2921 </small> </p> <br/> 
                </div>

                <ul>
                    <h3> Currently working on </h3>
                    <li> LeanerMeta Africa PWA </li>
                    <li> Jumia Clone - ECommerce </li>
                    <li> Amazon Clone - ECommerce </li>
                    <li> RestFUL API - Robust Backend </li>
                    <li> MERN - Whatsapp Clone </li>
                    <li> MERN - My Photo Well </li>
                </ul>

                <div>
                    <h3> Current availability </h3>
                    <p> At this moment, I am at your disposal for collaborations, contract/full-time engagements as well as freelancing possibilities</p>
                </div>

                <ul>
                    <h3> Follow me on </h3>
                    <li> <FiGithub className="icon"/> <a href="#github"> github </a> </li>
                    <li> <AiOutlineInstagram className="icon"/> <a href="#github"> instagram </a> </li>
                    <li> <FiTwitter className="icon"/> <a href="#github"> twitter </a> </li>
                    <li> <AiOutlineYoutube className="icon"/> <a href="#github"> facebook </a> </li>
                    <li> <AiOutlineYoutube className="icon"/> <a href="#github"> linkedIn </a> </li>
                </ul>

            </FooterLists>

            <CopyrightsClaim>
                <div>
                    <img src={logo_letterN} alt="logo_N"/>
                </div>
                <h4>Copyrights &copy; <span className="year" ref={yearRef}></span> THELEEEFFECT || THECODEDLEE  </h4>
                <p>All Rights Reserved</p>
            </CopyrightsClaim>
            

        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
    padding: 40px 2rem;
    background-color: white;
    color: ${props => props.theme.titleColor};
    background-color: ${props => props.theme.pageBackground};
    transition: 500ms;

    @media screen and (min-width: 1000px) {
        padding: 40px 4rem;
    }
`

const FooterLists = styled.div`
    border-top: 1px solid teal;
    display: grid;
    gap: 20px;

    > div {
        margin-top: 20px;
        margin-right: 20px;
        font-size: 14px;
        /* width: 30%; */

        > h3 {
            font-weight: 900;
            font-family: 'Antonio', sans-serif;
            color: teal;
            text-transform: uppercase;
            margin-bottom: 10px;
            text-align: justify;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }

        > p {
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
        }
    }

    > ul {
        list-style: none;
        margin-top: 20px;
        margin-right: 20px;
        padding: 0;
        font-size: 14px;
        
        > li {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 12px;
            font-family: 'Poppins', sans-serif;

            > a {
                text-decoration: none;
                font-family: 'Poppins', sans-serif;
                /* color: black; */
                color: ${props => props.theme.titleColor};
                margin-left: 10px;
                transition: 500ms;

                &:hover {
                    text-decoration: underline;
                    color: teal;
                    margin-left: 10px;
                    letter-spacing: 2px;
                }
            }
        }

        > h3 {
            font-weight: 900;
            font-family: 'Antonio', sans-serif;
            color: teal;
            text-transform: uppercase;
            margin-bottom: 10px;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const CopyrightsClaim = styled.div`
    margin-top: 40px;

    > div {
        > img {
            height: 40px;
            object-fit: contain;
        }
    }

    > h4 {
        font-family: 'Antonio', sans-serif;
    }

    > p {
        font-family: 'Poppins', sans-serif;
    }
`
