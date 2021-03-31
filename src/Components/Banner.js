import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './extended.css'

import bg_light from '../images/1x/1x/bg_light.png'
import bg_dark from '../images/1x/1x/bg_dark_2.png'
import Navbar from './Navbar'

import { bannerList } from '.././sourceData/data'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { GiWideArrowDunk } from 'react-icons/gi'

let bg = bg_light

function Banner(props) {
    const [index, setIndex] = useState(0)
    const [banner] = useState(bannerList)

    useEffect(() => {
       
        if(props.theme === 'light'){
            bg = bg_light
        } else {
            bg = bg_dark
        }
    }, [props.theme])

    useEffect(() => {
        if(index >= bannerList.length){
            setIndex(0)
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
            <Navbar props={props} />
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

                                    {/* <a href="../images/NURUDEEN_LAWAL.pdf" download="Nurudeen Wed Dev CV"> <GiWideArrowDunk /> Download My CV </a> */}
                                    
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
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Abel', sans-serif;
    min-height: 100vh;
    display: grid;
    /* place-items: center; */
    position: relative;
    color: black;

    > a {
        margin: 40px 0;
    }
`

const Profile = styled.div`
    color: #333;
    /* max-width: 85%; */
    max-width: 550px;

    height: 400px;
    position: relative;
    overflow: hidden;
    /* border: 1px solid; */

    z-index: 2;
   
    padding: 10px;
    transition: 500ms;
    
    margin: 28vh 30px -10px 30px;

    /* @media screen and (min-width: 600px) {
        width: 55%;
    } */
`

const BannerText = styled.div`
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    transition: 1000ms;


    > h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Abel', sans-serif;
        color: ${props => props.theme.titleColor};
        color: #333;
        transition: 500ms;

        /* @media screen and (min-width: 300px){
            font-size: 2.5rem;
        } */
    }

    > p {
        font-family: 'Abel', sans-serif;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${props => props.theme.titleColor};
        color: #333;
        transition: 500ms;
        margin-top: 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
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
            text-transform: uppercase;
            color: white;
            /* color: ${props => props.theme.titleColor}; */
            background-color: rgb(95, 10, 10); 
            margin-right: 5px;
            padding: 15px 3px;
            box-shadow: 0 0 5px black;
            font-family: 'Abel', sans-serif;
            font-size: 14px;
            font-weight: 900;
            border-radius: 2px;
            width: 45%;
            transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);

            /* @media screen and (min-width: 800px) {
                width: 35%;
            } */
                
            &:hover {
                background-color: #333;   
            }

        }

        > button {
            padding: 15px 3px;
            font-family: 'Abel', sans-serif;
            font-size: 13px;
            width: 60%;
           
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

            /* @media screen and (min-width: 800px) {
                width: 35%;
            } */

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