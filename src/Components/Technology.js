import React, { useState } from 'react'
import './Technology.css'
import { AiOutlineMinusSquare, AiFillPlusSquare } from 'react-icons/ai'

function Technology({title, info, icon}) {
    const [showMore, setShowMore] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)

    const moreAndInfo = () => {
        setShowMore(!showMore)
        setHideInfo(!hideInfo)
    }

    return (
        <>
        {/* <article className="tech">
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
        </article> */}
        <div className="technology-card">
            <div className="technology-title">
                <div className="technology-icon">
                    {icon}
                    <h4>{title}</h4>
                </div>
                <p className="indicator"></p>
                {/* {showMore ?  <AiOutlineMinusSquare className="plus-minus-icon"  onClick={moreAndInfo} /> : <AiFillPlusSquare className="plus-minus-icon" onClick={moreAndInfo} />} */}
            </div>
            {/* {hideInfo &&  <p className="technology-info" >{info}</p>} */}
        </div>
        </>
    )
}

export default Technology
