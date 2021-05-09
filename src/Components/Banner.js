import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './extended.css'

import uxstore from '../images/sami-takarautio-t4nN3RWBUow-unsplash.jpg'

import { bannerList } from '.././sourceData/data'
// import { GiWideArrowDunk } from 'react-icons/gi'

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
                                {/* <a href="#projects"> <GiWideArrowDunk /> jump to projects  </a> */}
                            </BannerText>
                        )
                    })
               }
                
            </Profile>

        </BannerContainer>
    )
}

export default Banner


const BannerContainer = styled.section`
    background-image: url(${uxstore});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
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
  background-color: rgba(0, 0, 0, 0.6);
`

const Profile = styled.div`
    color: #333;
    width: 80vw;
    max-width: 750px;
    text-align: center;
    border: 2px solid red;
    height: 50%;
    position: relative;
    overflow: hidden;
    z-index: 2;
    /* padding: 10px; */
    transition: 500ms;
  
    display: grid;
    margin: auto;
`

const BannerText = styled.div`
    padding: 10px;
    position: absolute;
    /* margin-top: 200px; */
    top: 0;
    left: 0;
    width: 100%;
    transition: 2000ms;

    > h1 {
        font-size: 2.1rem;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        color: teal;
        transition: 500ms;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        /* background-color: rgba(0, 0, 0, 0.25); */
        color: white;
        padding: 5px;
        transition: 500ms;
        margin-top: 10px;
        font-size: 14px;
        line-height: 25px;
        z-index: 1;

        @media screen and (min-width: 700px){
            padding: 15px;
        }
    }

    > a {
        display: block;
        text-decoration: none;
        text-align: center;
        color: black;
        border: 1px solid #444;
        background-color: teal;
        color: white;
        border: 1px solid;
        border-radius: 5px;
        margin: 20px auto 0;
        padding: 15px 3px;
        box-shadow: 0 0 5px #ccc;
        font-family: 'Antonio', sans-serif;
        font-size: 14px;
        font-weight: 900;
        width: 40%;
        transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);
        position: relative;
            
        &:hover {
            box-shadow: 0 0 20px #ccc;
        }
    }
`