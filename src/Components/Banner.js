import React, { useState, useEffect } from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { bannerList } from '.././sourceData/data'

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
        let slider = setInterval(() => {
            setIndex((index) => {
                let newIndex = index + 1
                if(newIndex > bannerList.length - 1){
                    return 0
                }
                return newIndex
            })
        }, 7000)
        return () => {
           clearInterval(slider)
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
                    <button>discover more</button>
                    <button>view my CV</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
