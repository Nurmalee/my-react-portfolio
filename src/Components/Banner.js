import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import banner from '../images/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg'
import { GiSelfLove } from 'react-icons/gi'

const Banner = (props) => {

    const yearRef = useRef(null)
    
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <BannerContainer id="home">
            <Overlay></Overlay>

            <BannerTitle>
                <h2>the lee effect</h2>
                <p>Welcome to the hub of enthralling & functional websites. I build exquisite and functional user interfaces which are in trueness, functional. Take this portfolio for example, play around here</p>
                <a href="#projects"> view my works </a>

                <CopyrightClaim>
                    <p>&#169; <span ref={yearRef}></span> The LeeEffect. <span> All Rights Reserved</span> | Made with <GiSelfLove style={{color: "red"}} /> from Nigeria </p>
                </CopyrightClaim>
            </BannerTitle>

        </BannerContainer>
    )
}

export default Banner


const BannerContainer = styled.section`
    background-color: rgb(253,253,253);
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: grid;
    place-items: center;
    color: black;
    position: relative;

    > a {
        margin: 40px 0;
    }
`

const BannerTitle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85vw;
    z-index: 1;
    max-width: 750px;
    margin: 0 auto;
   
    > h2 {
        font-size: 2.5rem;
        color: white;
        letter-spacing: 5px;
        text-align: center;
        font-weight: 700;
        font-family: 'Antonio', sans-serif;
        text-transform: uppercase;

        @media screen and (min-width: 700px) {
            font-size: 3.0rem;
        }
    }

    > p {
        font-family: 'Poppins', sans-serif;
        color: white;
        transition: 500ms;
        text-align: center;
        margin-top: 5px;
        font-size: 12px;
        font-weight: 300;
        line-height: 25px;

        @media screen and (min-width: 700px){
            font-size: 16px;
        }
    }

    > a {
        display: block;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        color: white;
        border: 1px solid;
        border-bottom-right-radius: 10px;
        margin: 20px auto 0;
        padding: 12px 25px;
        font-family: 'Antonio', sans-serif;
        font-size: 10px;
        font-weight: 300;
        width: 200px;
        letter-spacing: 2px;
        background-color: brown;
        box-shadow: 0 0 10px #ccc;
        transition: 500ms;
        position: relative;
        
        &:hover {
            box-shadow: 0 0 20px #ccc;
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
    text-align: center;

    @media screen and (min-width: 900px) {
        font-size: 12px;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 0, 0, 0.6);
`