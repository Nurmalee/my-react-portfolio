import React, { useState } from 'react'
import './Technology.css'
import styled from 'styled-components'

function Technology({title, info, icon}) {
    const [showMore, setShowMore] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)

    const moreAndInfo = () => {
        setShowMore(!showMore)
        setHideInfo(!hideInfo)
    }

    return (
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
    )
}

export default Technology 

// const
