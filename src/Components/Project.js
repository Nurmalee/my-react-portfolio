// import { useState } from 'react'
import styled from 'styled-components'
import './extended.css'

function Project({imageUrl, title, link, Html5, Css, Javascript, MaterialUi, React, Redux, Firebase, StyledComponents}) {

    return (
        <ProjectCard>
            <ProjectImage>
                <img src={imageUrl} alt={title}/>
                <ProjectStack>
                    <h3>{title}</h3>
                    <div>
                        {Html5 && <Html5 className="icon projecticon" />}
                        {Css && <Css className="icon projecticon" />}
                        {Javascript && <Javascript className="icon projecticon" />}
                        {React && <React className="icon projecticon" />}
                        {Firebase && <Firebase className="icon projecticon" />}
                        {StyledComponents && <StyledComponents className="icon projecticon" />}
                        {MaterialUi && <MaterialUi className="icon projecticon" />}
                        {Redux && <Redux className="icon projecticon" />}
                    </div>
                </ProjectStack>
            </ProjectImage>
            <ProjectInfo>
                <h2> {title} </h2>
                <a href={link} target='_blank' rel="noreferrer">check out</a>
            </ProjectInfo>
        </ProjectCard>
    )
}

export default Project

const ProjectCard = styled.div`
    box-shadow: 7px 5px 5px ${props => props.theme.shadow};
    align-self: flex-start;
    color: #555;
    border: 1px solid #bbb;
    /* border: 1px solid brown; */
    border-radius: 5px;

    &:hover {
        border: 1px solid brown;
    }
`

const ProjectImage = styled.div`
    height: 270px;
    position: relative;

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }

    &:hover > div {
        opacity: 1;
        z-index: 10;
    }
`

const ProjectStack = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.5;
    color: white;
    text-align: left;
    text-justify: left;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 1000ms;

    > h3 {
        padding: 0 5px;
        font-family: 'Antonio', sans-serif;
        text-align: center;
        font-size: 20px;
        font-weight: 900;
    }
`

const ProjectInfo = styled.article`
    padding: 20px;
    background-color: whitesmoke;
    position: relative;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    z-index: 14;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: black;
        display: inline-block;
        width: fit-content;
    }

    > a {
        text-transform: uppercase;
        text-decoration: none;
        color: #444;
        font-size: 13px;
        border: 1px solid;
        border-bottom-right-radius: 5px;
        padding: 2px 10px;
        transition: 500ms;

        &:hover {
            background-color: #222;
            color: #ccc;
            border: 1px solid #444;
        }
    }
`
