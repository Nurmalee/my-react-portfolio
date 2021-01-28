import React from 'react'
import './Technologies.css'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { SiAdobeillustrator } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript } from 'react-icons/di'
import { techList } from '.././sourceData/data'


function Technologies() {

    const techCardColorEffect = (color) => {
        console.log(color);
        return {
            color: color
        }
    }

    return (
        <section className="technologies" id="technologies">
            <h1>Technologies</h1>
            <div className="underline"></div>

            <div className="techs-container">
                {techList.map(tech => {
                    const {id, title, color, info} = tech
                    return (
                        <article key={id} className="tech">
                            <div className="tech-image" onMouseOver={() => techCardColorEffect(color)} style={techCardColorEffect(color)}>
                               {title === "html5" && <FaHtml5 className="tech-icon" /> }
                               {title === "css3" && <FaCss3Alt className="tech-icon" /> }
                               {title === "javascript" && <DiJavascript className="tech-icon" /> }
                               {title === "jQuery" && <DiJqueryLogo className="tech-icon" /> }
                               {title === "react" && <FaReact className="tech-icon" /> }
                               {title === "adobe illustrator" && <SiAdobeillustrator className="tech-icon" /> }
                               <h3 className="tech-name"> {title} </h3>
                            </div>
                            <p className="tech-info">{info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Technologies
