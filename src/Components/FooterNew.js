import {useEffect, useRef} from 'react'
import styled from 'styled-components'

const FooterNew = () => {

    const yearRef = useRef(null)
    
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <FooterContainer>
            <FooterMain>
                <FooterColumns>
                    <Column>
                        <h2>Currently working on</h2>
                        <li> LeanerMeta Africa PWA </li>
                        <li> Jumia Clone - E-Commerce </li>
                        <li> RestFUL API - Robust Backend </li>
                        <li> MERN - Youtube reclone </li>
                    </Column>

                    <Column>
                        <h2>overview</h2>
                        <li><a href="#about"> my profile </a></li>
                        <li><a href="#technologies"> technologies </a></li>
                        <li><a href="#services"> what i offer </a></li>
                        <li>terms of service</li>
                    </Column>

                    <Column>
                        <h2>contact me</h2>
                        <li><a href="#contactme"> contact </a></li>
                        <li>support</li>
                        <li>sponsorship</li>
                    </Column>

                    <Column>
                        <h2>social media</h2>
                         <li><a href="https://github.com/Nurmalee"> GitHub </a></li>
                        <li><a href="https://instagram.com/thecodedlee"> Instagram </a></li>
                        <li><a href="https://youtube.com/nurudeenlawal"> Youtube </a></li>
                        <li><a href="https://twitter.com/nurmanteasy"> Twitter </a></li>
                    </Column>
                </FooterColumns>

                <CopyrightClaim>
                    <p>&#169; <span ref={yearRef}></span> The CodedLee & The LeeEffect. <span> All Rights Reserved</span> | Made with React from Nigeria </p>
                </CopyrightClaim>
            </FooterMain>
        </FooterContainer>
    )
}

export default FooterNew


const FooterContainer = styled.section`
    padding: 70px 0;
    color: #bbb;
    background-color: #222;
`

const FooterMain = styled.footer`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
`

const FooterColumns = styled.div`
    border-top: 2px solid brown;
    display: grid;
    place-items: center;
    gap: 20px;
    padding-top: 20px;

    @media screen and (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }

`

const Column = styled.ul`
    list-style: none;
    text-transform: capitalize;
    align-self: flex-start;
    justify-self: flex-start;
    font-family: 'Poppins', sans-serif;


    > h2 {
        font-size: 12px;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: white;
    }

    > li {
        font-size: 12px;
        padding: 2px 0;
        cursor: pointer;

        > a {
            color: #bbb;
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 300;

            &:hover {
                color: white;
            }
        }
    }

`

const CopyrightClaim = styled.div`
    margin-top: 45px;
    background-color: #333;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
    font-size: 12px;
    text-transform: uppercase;
    padding: 15px;

    @media screen and (min-width: 900px) {
        text-align: center;
    }
`
