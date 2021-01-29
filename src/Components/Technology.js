import React from 'react'
import './Technology.css'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { SiAdobeillustrator } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript } from 'react-icons/di'

function Technology({id, title, color, info}) {
    return (
        <article key={id} className="tech">
            <div className="tech-image">
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
}

export default Technology
