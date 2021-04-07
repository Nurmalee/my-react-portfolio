import { useState } from 'react'
import styled from 'styled-components'

function Project({imageUrl, title, technologies, info, link}) {
    const [showLess, setShowLess] = useState(true);

    return (
        <ProjectCard>
            <ProjectImage>
                <img src={imageUrl} alt={title}/>
                <div>
                    {/* <p>
                        <b>SUMMARY - </b><br/>
                        <i>{info}</i>
                    </p> <br/> */}
                    <p>{title}</p>
                    <p>
                        <small>{technologies}</small> 
                    </p>
                </div>
                <a href={link}>go to page</a>
            </ProjectImage>
            <ProjectInfo>
                <h2> {title} </h2>
                <p>
                    {showLess ? `${info.substring(0, 100)}...` : info } 
                    <button onClick={() => setShowLess(!showLess)}> {showLess ? ' Show More' : ' Show Less'} </button>
                </p>
            </ProjectInfo>
        </ProjectCard>
    )
}

export default Project

const ProjectCard = styled.div`
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.7);
    align-self: flex-start;
    color: #555;
    border: 2px solid white;
`

const ProjectImage = styled.div`
    height: 350px;
    position: relative;

    > div {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0;
        color: white;
        text-align: left;
        text-justify: left;
        font-family: 'Abel', sans-serif;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > p {
            padding: 20px;
            text-align: center;
            font-size: 20px;
            font-weight: 900;

            &:nth-of-type(2) {
                font-size: 12px;
            }
        }
    }
    

    > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        transform: scale(0.95);
    }

    &::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        left: 0;
        width: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 400ms;
    }

    &::before {
        content: "";
        position: absolute;
        box-sizing: border-box;
        right: 0;
        width: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 400ms;
    }

    &:hover::after,
    &:hover::before {
        width: 100%;
    }

    &:hover > div {
        opacity: 1;
        z-index: 10;
        transition: 3000ms;
    }

    > a {
        position: absolute;
        left: 0;
        bottom : -45px;
        width: 100%;
        height: 45px;
        border: none;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        background-color: brown;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
        font-weight: 700;
        z-index: 11;
        cursor: pointer;
        transition: 400ms;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: darkred;
        }
    }

    &:hover > a {
        bottom : 0;
    }
`

const ProjectInfo = styled.article`
    padding: 20px;
    background-color: whitesmoke;
    position: relative;
    z-index: 14;

    > h2 {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
        text-transform: uppercase;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: black;
    }

    > p {
        text-align: justify;
        font-size: 12px;
        font-weight: 400;

        > button {
            padding: 0;
            outline: none;
            border: none;
            letter-spacing: 1px;
            color: darkred;
            font-weight: bold;
            font-size: 10px;
            margin-left: 5px;
            cursor: pointer;
        }
    }
`
