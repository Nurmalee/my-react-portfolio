import React from 'react'
import './Technologies.css'
import { techList } from '.././sourceData/data'
import Technology from './Technology'


function Technologies() {

    // const techCardColorEffect = (color) => {
    //     console.log(color);
    //     return {
    //         color: color
    //     }
    // }

    return (
        <section className="technologies" id="technologies">
            <h1>Technologies/Languages</h1>
            <div className="underline"></div>

            <p>Redescribe these technologies, give more details, e.g under css.. include css grid, flexbox etc .. use an accordion to redesign th whole section, make sure tp talk about responsiveness and other things you offer</p>

            <div className="techs-container">
                {techList.map((tech, index) => {
                    return (
                        <Technology {...tech} key={index}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Technologies
