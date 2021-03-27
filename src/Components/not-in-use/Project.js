import React, { useState } from 'react'
import './Project.css'

function Project({imageUrl, title, info}) {
    const [showLess, setShowLess] = useState(true);

    return (
        <div className="project-card">
            <div className="project-image">
                <img src={imageUrl} alt={title}/>
            </div>
            <article className="project-info">
                <h2 className="project-title"> {title} </h2>
                <p className="project-desc">
                    {showLess ? `${info.substring(0, 100)}...` : info } 
                    <button onClick={() => setShowLess(!showLess)}> {showLess ? ' Show More' : ' Show Less'} </button>
                </p>
                <button className="visit-page"> visit page </button>
            </article>
        </div>
    )
}

export default Project
