import React from 'react'
import './Technologies.css'
import { techList } from '.././sourceData/data'
import Technology from './Technology'


function Technologies() {

    return (
        <section className="technologies" id="technologies">
            <h1>Technologies/Languages</h1>
            <div className="underline"></div>

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
