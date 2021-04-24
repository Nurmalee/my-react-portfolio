import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './extended.css'

import uxstore from '../images/ux-store-jJT2r2n7lYA-unsplash.jpg'

import { bannerList } from '.././sourceData/data'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { GiWideArrowDunk } from 'react-icons/gi'

function Banner(props) {
    const [index, setIndex] = useState(0)
    const [banner] = useState(bannerList)

    useEffect(() => {
        if(index >= bannerList.length){
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        let autoSlide = setInterval(() => {
            setIndex(index + 1)
        }, 12000)
        return () => {
            clearInterval(autoSlide)
        }
    }, [index])

    return (
        <BannerContainer id="home">
            <Overlay></Overlay>
           
            <Profile>
               {
                   banner.map((bannerItem, bannerItemIndex) => {
                        const {id, title, info} = bannerItem

                        let position = "nextSlide"

                        if(bannerItemIndex === index){
                            position = "activeSlide"
                        }

                        if(bannerItemIndex === index - 1 || (index === 0 && bannerItemIndex === bannerList.length - 1)){
                            position = "prevSlide"
                        }

                        return (
                            <BannerText key={id} className={position}>
                                <h1> {title} </h1>
                                <p> {info} </p>
                                <Buttons>
                                    <a href="#projects"> <GiWideArrowDunk /> jump to projects  </a>
                                </Buttons>
                            </BannerText>
                        )
                    })
               }
                
            </Profile>
            
            <a href="#about"> <ArrowDownBtn/> </a>

        </BannerContainer>
    )
}

export default Banner


const BannerContainer = styled.section`
    background-image: url(${uxstore});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 105vh;
    display: grid;
    position: relative;
    color: black;

    > a {
        margin: 40px 0;
    }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

const Profile = styled.div`
    color: #333;
    max-width: 600px;
    height: 400px;
    position: relative;
    overflow: hidden;
    z-index: 2;
    padding: 10px;
    transition: 500ms;
    margin: 28vh 30px -10px 30px;
`

const BannerText = styled.div`
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    transition: 2000ms;
    /* transition: 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275); */

    > h1 {
        font-size: 2.1rem;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        color: teal;
        /* text-shadow:
            -1px -1px 0 #fff,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #fff; */
        transition: 500ms;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        background-color: rgba(0, 0, 0, 0.25);
        color: white;
        padding: 5px;
        transition: 500ms;
        margin-top: 10px;
        font-size: 12px;
        line-height: 25px;
        z-index: 1;

        @media screen and (min-width: 700px){
            padding: 15px;
        }
    }
`

const Buttons = styled.article`
    margin-top: 10px;
    display: flex;
    width: 100%;

    > a {
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        color: black;
        border: 1px solid #444;
        /* border-radius: 4px; */
        /* color: ${props => props.theme.titleColor}; */
        background-color: transparent; 
        margin-right: 5px;
        padding: 15px 3px;
        box-shadow: 0 0 5px #777;
        font-family: 'Antonio', sans-serif;
        font-size: 14px;
        font-weight: 900;
        width: 45%;
        transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);
        position: relative;
            
        &:hover {
            color: white;
            border: 1px solid;
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 0;
            background-color: teal;
            transition: 1000ms;
            z-index: -1;
        }

        &:hover::after {
            width: 100%;
        }

    }
`

const ArrowDownBtn = styled(IoIosArrowDropdownCircle)`
    height: 40px;
    width: 40px;
    transform: rotate(180deg);
    color: rgba(68, 68, 68, 0.9);
    border: 1px solid;
    border-radius: 50%;
    box-shadow: 0 0 3px black;
    transition: 1000ms cubic-bezier(0.215, 0.610, 0.355, 1);

    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%, -50%);

    &:hover {
        color: darkred;
        transform: rotate(2160deg);
        box-shadow: 0 0 10px black;
    }
`