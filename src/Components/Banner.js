import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import MySocialLinks from './MySocialLinks'
import banner from '../images/fakurian-design-dvfph1sB-oA-unsplash.jpg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { motion } from 'framer-motion'

const bannerTitle = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {delay: 1.0, duration: 0.5}
    }
}

const bannerTitleP = {
    initial: {
        opacity: 0,
        x: -700,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {delay: 1.0, duration: 0.5}
    }
}

const bannerButton = {
    animate: {
        scale: 1.2,
        transition: {
            yoyo: Infinity,
        }
    },
}

const Banner = (props) => {

    const yearRef = useRef(null)
    
    useEffect(() => {
        const newYear = new Date().getFullYear()
        yearRef.current.textContent = newYear
    }, [])

    return (
        <BannerContainer id="home">
            <Overlay></Overlay>

            <BannerTitle
                variants={bannerTitle}
                initial="initial"
                animate="animate"
             >
                <motion.p variants={bannerTitleP}> Hi, I'm LEE. Welcome to the hub of enthralling & functional websites. I build exquisite & functional user interfaces </motion.p>

                <motion.a variants={bannerButton} animate="animate" href="#about"> Learn more about what I do <br></br> <span> <ArrowDropDownIcon /> </span> </motion.a>

                <CopyrightClaim>
                    <p>&#169; <span ref={yearRef}></span> The LeeEffect. All Rights Reserved | Live from the LEE TEMPLE </p>
                </CopyrightClaim>

                <MySocialLinks />
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
    height: 100vh;
    min-height: 600px;
    overflow-y: scroll;
    display: grid;
    place-items: center;
    color: black;
    position: relative;
    scroll-snap-align: start;

    > a {
        margin: 40px 0;
    }

    &::-webkit-scrollbar {
        width: 0;
    }
        
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 5px;
    }
`

const BannerTitle = styled(motion.div)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    z-index: 1;
    max-width: 950px;
    margin: 0 auto;
   
    > h2 {
        font-size: 2.3rem;
        color: white;
        margin-bottom: 10px;
        /* letter-spacing: 2px; */
        text-align: center;
        font-weight: 700;
        font-family: 'Antonio', sans-serif;
        font-family: 'Otomanopee One', sans-serif;
        text-transform: uppercase;

        @media screen and (min-width: 700px) {
            font-size: 3.2vw;
        }
    }

    > p {
        font-family: 'Poppins', sans-serif;
        font-family: 'Antonio', sans-serif;
        font-family: 'Otomanopee One', sans-serif;
        color: white;
        transition: 500ms;
        text-align: center;
        margin-top: 5px;
        font-size: 10px;
        font-size: 1.2rem;
        /* font-weight: 300; */

        @media screen and (min-width: 700px){
            font-size: 1.3vw;
            font-size: 1.7rem;
        }
    }

    > a {
        display: block;
        text-decoration: none;
        text-align: center;
        text-transform: capitalize;
        color: white;
        /* border: 1px solid #bbb; */
        border-radius: 2px;
        margin: 20px auto 0;
        padding: 12px 25px;
        font-family: 'Antonio', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        /* width: 200px; */
        letter-spacing: 1px;
        /* background-color: brown; */
        transition: 500ms;
        position: relative;


        position: absolute;
        bottom: 20px;
        
        &:hover {
             /* box-shadow: 0 0 10px #ccc; */
        }

        @media screen and (min-width: 700px){
            /* width: 16vw; */
            font-size: 0.9vw;
        }
    }
`

const CopyrightClaim = styled.div`
    margin: 25px 0;
    background-color: rgb(250,230,230);
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    padding:  5px 15px;
    text-align: center;
    max-width: 90%;

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
    transition: 500ms;
    background-color: ${props => props.theme.bannerOverlayDim};
`