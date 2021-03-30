import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import logo_letterN from '../images/1x/logo_letterN.png'

import { FiTwitter, FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

import { BsDash } from 'react-icons/bs'

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
                    <p> Contact information <BsDash/> </p>
                    You can reach out to me anytime via email or phone, although most preferrably email since we may have considerable time differences <br/> <br/>
                    <b> <small> email: thecodedlee.lee@gmail.com </small> </b> <br/>
                    <b> <small> p: +234 816 480 0735; +234 907 576 2921 </small> </b> <br/> 
                </div>

                <ul>
                    <p> Currently working on <BsDash/> </p>
                    <li> LeanerMeta Africa PWA (<b> <small>contract</small> </b>) </li>
                    <li> MERN - Whatsapp Clone (<b> <small>personnal</small> </b>) </li>
                    <li> MERN - My Photo Well (<b> <small>personnal</small> </b>) </li>
                </ul>

                <div>
                    <p> Current availability <BsDash/> </p>
                    At this moment, I am at your disposal for collaborations, contract/full-time engagements as well as freelancing possibilities
                </div>

                <ul>
                    <p> Follow me on <BsDash/> </p>
                    <li> <FiGithub/> <a href="#github"> github </a> </li>
                    <li> <AiOutlineInstagram/> <a href="#github"> instagram </a> </li>
                    <li> <FiTwitter/> <a href="#github"> twitter </a> </li>
                    <li> <AiOutlineYoutube/> <a href="#github"> facebook </a> </li>
                    <li> <AiOutlineYoutube/> <a href="#github"> linkedIn </a> </li>
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
    border-top: 1px solid #ccc;

    > div {
        margin-top: 20px;
        margin-right: 20px;
        font-size: 14px;
        /* width: 30%; */

        > p {
            font-weight: 900;
            margin-bottom: 10px;
            text-align: justify;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
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
            font-size: 14px;

            > a {
                text-decoration: none;
                /* color: black; */
                color: ${props => props.theme.titleColor};
                margin-left: 10px;
                transition: 500ms;

                &:hover {
                    text-decoration: underline;
                    color: darkred;
                    margin-left: 15px;
                    font-weight: 700;
                }
            }
        }

        > p {
            font-weight: 900;
            margin-bottom: 10px;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }
    }

    @media screen and (min-width: 600px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > div {
            flex: 0.3;
        }
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

    > h4, p {
        font-family: 'Abel', sans-serif;
    }
`
