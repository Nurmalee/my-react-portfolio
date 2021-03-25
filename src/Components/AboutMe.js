import React from 'react'
import styled from 'styled-components'
import me from '.././images/me.jpg'
import backgroundImg from '../images/1x/aboutme_techs.png'
import Technologies from './Technologies'


function AboutMe() {

    return (
        <AboutContainer id="about">
            <h1>About Me</h1>
            <p>An Introduction and highlights of my competencies</p>
            
            <AboutInfo>
                <img src={me} alt="Nurudeen Lawal" />
                <p> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus magnam dolore, nostrum eius rem eveniet iure? Magni nemo, quod earum numquam totam culpa quaerat dolorum ad reprehenderit vel nobis aspernatur obcaecati molestias praesentium odit at accusantium asperiores minus! Doloribus deleniti molestiae aut sint accusantium libero reprehenderit quisquam nulla! Accusamus aut nihil quis eum corporis accusantium id dolore, iste enim molestias! Impedit nostrum ipsam modi, tenetur consequuntur assumenda perspiciatis itaque esse vero deserunt praesentium" </p>
            </AboutInfo>
            <Technologies />
        </AboutContainer>
    )
}

export default AboutMe

const AboutContainer = styled.section`
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-family: 'Abel', sans-serif;
    padding: 50px 3rem;
    transition: 1000ms;

    :hover {
        padding-top: 100px;
    }

    > h1 {
        color: black;
        font-family: 'Abel', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: left;
        border-bottom: 2px solid;
        width: fit-content;
    }

    > p {
        text-transform: uppercase;
        color: #7777;
        margin-top: 20px;
        letter-spacing: 2px;
    }

    :hover p::after {
        width: 70%;
    }
`

const AboutInfo = styled.div`
    margin: 60px auto 0 auto;
    color: #555;
    font-family: 'Abel', sans-serif;
    font-size: 13px;
    overflow-wrap: break-word;

    > p {
        max-width: 600px;
        align-self: flex-start;
        line-height: 30px;
        text-align: justify;
        margin-top: 25px;
    }

    > img {
        object-fit: cover;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        border: 5px solid white;
        box-shadow: 0 0 10px grey;
    }

    @media screen and (min-width: 700px) {
        display: flex;
         
        > P {
            margin-top: 0;
            margin-left: 30px;
        }
    }
`
