import { useState } from 'react'
import styled from 'styled-components'

function Project({imageUrl, title, info}) {
    const [showLess, setShowLess] = useState(true);

    return (
        <ProjectCard>
            <ProjectImage>
                <img src={imageUrl} alt={title}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque quisquam totam quam asperiores assumenda ea. Quisquam explicabo ea delectus esse asperiores iusto praesentium accusamus, amet reiciendis velit! Libero, perferendis?</p>
            </ProjectImage>
            <ProjectInfo>
                <h2> {title} </h2>
                <p>
                    {showLess ? `${info.substring(0, 100)}...` : info } 
                    <button onClick={() => setShowLess(!showLess)}> {showLess ? ' Show More' : ' Show Less'} </button>
                </p>
                {/* <button> visit page <AiOutlineArrowRight /> </button> */}
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

    > p {
        position: absolute;
        top: 0;
        opacity: 0;
        color: white;
        text-align: left;
        text-justify: left;
        margin: 20px;
        margin-top: 70px;
        font-family: 'Abel', sans-serif;
        /* text-transform: uppercase; */
    }
    

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
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

    &:hover > p {
        opacity: 1;
        z-index: 10;
        margin-top: 20px;
        transition: 3000ms;
    }
`

const ProjectInfo = styled.article`
    padding: 20px;
    background-color: whitesmoke;

    > h2 {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
        text-transform: capitalize;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: black;
    }

    > button {
        outline: none;
        border: none;
        cursor: pointer;
        margin-top: 20px;
        color: darkred;
        font-weight: bold;
        font-size: 13px;
        text-transform: uppercase;
        box-shadow: 0 0 1px grey;
        display: flex;
        align-items: center;

        &:hover {
            outline: none;
        }
    }

    > p {
        text-align: start;
        font-size: 14px;
        font-weight: 400;

        > button {
            padding: 0;
            outline: none;
            border: none;
            letter-spacing: 1px;
            color: teal;
            font-weight: bold;
            font-size: 10px;
            margin-left: 5px;
            cursor: pointer;
        }
    }
`
