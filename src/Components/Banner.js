import React, { useState, useEffect } from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { bannerList } from '.././sourceData/data'
import { IoIosArrowDropdownCircle } from 'react-icons/io'


function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [index, setIndex] = useState(0)
    const {title, info} = bannerList[index]

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    useEffect(() => {
        let bannerListSlider = setInterval(() => {
            setIndex((index) => {
                let newIndex = index + 1
                if(newIndex > bannerList.length - 1){
                    return 0
                }
                return newIndex
            })
        }, 12000)
        return () => {
           clearInterval(bannerListSlider)
        }
    }, [index])

    return (
        <section className="banner" id="home">
            {/* <h5>{windowWidth} px </h5> */}
            <Navbar />
            <div className="profile">                
                <h1> {title} </h1>
                <p className="profile-summary"> {info} </p>
                <div className="profile-buttons">
                    <button href="#projects"> discover more </button>
                    <button>view my CV</button>
                </div>
            </div>
            <a href="#about"> <IoIosArrowDropdownCircle className="arrow-down" /> </a>
        </section>
    )
}

export default Banner
