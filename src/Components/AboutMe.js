import styled from 'styled-components'
import me from '.././images/me.jpg'
// import backgroundImg from '../images/1x/aboutme_techs.png'
import Technologies from './Technologies'


function AboutMe() {

    return (
        <AboutContainer id="about">
            <p>Introduction & highlights</p>
            <h1>About Me</h1>

            <AboutInfo>
                <img src={me} alt="Nurudeen Lawal" />
                <p> "Independent and meticulous web developer with over 2 years of experience in the front-end department concatenating the art of design with functional and object-oriented programming skills to deliver enthralling user interfaces with captivating responsiveness for immersive user experience. Recursively pushing variables into an array of abilities that already includes proficiency in HTML, CSS, JavaScript, jQuery, Node and frameworks and/or libraries like React, Bootstrap, Material UI etc." </p>
            </AboutInfo>
            <Technologies />
        </AboutContainer>
    )
}

export default AboutMe

const AboutContainer = styled.section`
    min-height: 100vh;
    font-family: 'Abel', sans-serif;
    padding: 50px 2rem;
    transition: 500ms;

    @media screen and (min-width: 1000px) {
        padding: 50px 4rem;
    }

    &:hover {
        padding-top: 100px;

        p::after {
            width: 75%;
        }
    }

    > h1 {
        color: black;
        font-family: 'Abel', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: left;
        width: fit-content;
        letter-spacing: 3px;
    }

    > p {
        text-transform: uppercase;
        border-top: 1px solid #777;
        color: #777;
        letter-spacing: 2px;
        width: fit-content;
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
        border-radius: 5%;
        border: 3px solid white;
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
