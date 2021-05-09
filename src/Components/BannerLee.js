import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import banner from '../images/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg'
import { GiSelfLove } from 'react-icons/gi'

const BannerLee = (props) => {

    const yearRef = useRef(null)
    
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <BannerContainer id="home">

            <BannerTitle>
                <Overlay></Overlay>
                <h1> nurudeen </h1>
                <h3>lawal</h3>
            </BannerTitle>

            <BannerText>
                <h1>welcome to the hub of enthralling & functional websites</h1>
                <p> I build exquisite and functional user interfaces which are in trueness, functional. This portfolio for example was made purely with react js and css in styled-components. It showcases the flexibility of functional components  </p>
                <a href="#projects"> view my projects </a>

                <CopyrightClaim>
                    <p>&#169; <span ref={yearRef}></span> The LeeEffect. <span> All Rights Reserved</span> | Made with <GiSelfLove style={{color: "red"}} /> from Nigeria </p>
                </CopyrightClaim>
            </BannerText>

        </BannerContainer>
    )
}

export default BannerLee


const BannerContainer = styled.section`
    background-color: rgb(253,253,253);
    /* background-color: white; */
    min-height: 100vh;
    display: grid;
    place-items: center;
    color: black;

    > a {
        margin: 40px 0;
    }
`

const BannerTitle = styled.div`
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
    > h1 {
        font-size: 3.3rem;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        color: brown;
        letter-spacing: 10px;
        width: 85vw;
        z-index: 1;
        max-width: 750px;
        margin: 0 auto;
        margin-top: 77px;
        text-align: center;
        transition: 500ms;
        -webkit-text-fill-color: brown;
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: #eee;

        @media screen and (min-width: 700px) {
            font-size: 3.8rem;
        }
    }

    > h3 {
        font-size: 2.5rem;
        color: white;
        letter-spacing: 10px;
        width: 85vw;
        z-index: 1;
        max-width: 750px;
        margin: 0 auto;
        text-align: center;
        z-index: 1;
        font-weight: 100;
        font-family: 'Antonio', sans-serif;
        text-transform: uppercase;

        @media screen and (min-width: 700px) {
            font-size: 3.0rem;
        }
    }
`


const BannerText = styled.div`
    width: 85vw;
    max-width: 750px;
    padding: 10px;
    text-align: center;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    > h1 {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: black;
        margin-top: 10px;
        z-index: 1;
        transition: 500ms;
        
        @media screen and (min-width: 700px) {
            font-size: 1.2rem;
        }
    }

    > p {
        font-family: 'Poppins', sans-serif;
        color: #555;
        transition: 500ms;
        margin-top: 5px;
        font-size: 12px;
        font-weight: 500;
        line-height: 25px;
        z-index: 1;

        @media screen and (min-width: 700px){
            padding: 15px;
            font-size: 14px;
        }
    }

    > a {
        display: block;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        color: #555;
        border: 2px solid;
        border-bottom-right-radius: 10px;
        margin: 20px auto 0;
        padding: 12px 5px;
        font-family: 'Antonio', sans-serif;
        font-size: 10px;
        font-weight: 900;
        width: 35%;
        box-shadow: 0 0 10px #ccc;
        transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);
        position: relative;
        
        &:hover {
            background-color: brown;
            color: white;
        }

        @media screen and (min-width: 700px){
            font-size: 12px;
        }
    }
`

const CopyrightClaim = styled.div`
    margin-top: 25px;
    background-color: rgb(250,230,230);
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    padding:  5px 15px;

    @media screen and (min-width: 900px) {
        text-align: center;
        font-size: 11px;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 0, 0, 0.8);
`