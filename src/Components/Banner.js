import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './extended.css'
import backgroundImg from '../images/1x/banner_bg.png'
// import backgroundImg from '../images/theme-photos-nJCW43biz9U-unsplash.jpg'
import Navbar from './Navbar'

import { bannerList } from '.././sourceData/data'
import { IoIosArrowDropdownCircle } from 'react-icons/io'


function Banner() {
    const [index, setIndex] = useState(0)
    const [banner, setBanner] = useState(bannerList)
    // const {title, info} = bannerList[index]

    // useEffect(() => {
    //     let bannerListSlider = setInterval(() => {
    //         setIndex((index) => {
    //             let newIndex = index + 1
    //             if(newIndex > bannerList.length - 1){
    //                 return 0
    //             }
    //             return newIndex
    //         })
    //     }, 12000)
    //     return () => {
    //        clearInterval(bannerListSlider)
    //     }
    // }, [index])

    useEffect(() => {
        if(index >= bannerList.length - 1){
            setIndex(0)
        }

        if(index < 0) {
            setIndex(bannerList.length - 1)
        }
    }, [index])

    useEffect(() => {
        let autoSlide = setInterval(() => {
            setIndex(index + 1)
        }, 10000)
        return () => {
            clearInterval(autoSlide)
        }
    }, [index])

    return (
        <BannerContainer id="home" imageUrl='../images/bruce-tang-DfRRllois_I-unsplash.jpg'>
            <Navbar />
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
                                    <a href="#projects"> jump to projects </a>
                                    <button>view my CV</button>
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
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Abel', sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
    color: black;

    > a {
        margin: 100px 0 10px 0;
    }
`

const Profile = styled.div`
    color: black;
    width: 85%;

    height: 300px;
    position: relative;
    overflow: hidden;

    z-index: 2;
    margin-top: 200px;
    padding: 10px;
    transition: 500ms;

    @media screen and (min-width: 600px) {
        width: 60%;
    }
`

const BannerText = styled.div`
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1000ms;

    > h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Abel', sans-serif;
    }

    > p {
        text-align: justify;
        font-family: 'Abel', sans-serif;
        margin-top: 20px;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        z-index: 1;
    }
`

const Buttons = styled.article`
        margin-top: 20px;
        display: flex;
        width: 100%;

        > a {
            text-decoration: none;
            text-align: center;
            text-transform: capitalize;
            color: white;
            background-color: darkred;
            margin-right: 5px;
            padding: 15px 3px;
            font-family: 'Abel', sans-serif;
            font-size: 13px;
            width: 50%;

            @media screen and (min-width: 800px) {
                width: 35%;
            }
                
            &:hover {
                background-color: rgb(95, 10, 10);     
            }

        }

        > button {
            padding: 15px 3px;
            font-family: 'Abel', sans-serif;
            font-size: 13px;
            width: 50%;
           
            background-color: transparent;
            text-transform: capitalize;
            color: black;
            border: 1px solid black;
            outline: none;
            position: relative;
            cursor: pointer;
            box-shadow: 0 0 5px black;
            z-index: 1;
            transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);

            @media screen and (min-width: 800px) {
                width: 35%;
            }

            &:hover {
                color: white;
            }

            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                top: 0;
                height: 100%;
                width: 0;
                color: white;
                background-color: rgb(95, 10, 10);
                z-index: -1;
                transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);
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

    &:hover {
        color: darkred;
        transform: rotate(2160deg);
        box-shadow: 0 0 10px black;
    }
`