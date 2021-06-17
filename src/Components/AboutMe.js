import styled from 'styled-components'
import me from '.././images/me.jpg'
// import backgroundImg from '../images/1x/aboutme_techs.png'
import Technologies from './Technologies'


function AboutMe(props) {

    return (
        <AboutContainer id="about">
            <SectionHeader>
                <p>Introduction & highlights</p>
                <h1>overview</h1>
            </SectionHeader>
            
            <AboutInfo>
                <img src={me} alt="Nurudeen Lawal" />
                <p> I'm an independent and meticulous web developer with over 2 years of experience in the front-end department concatenating the art of design with functional and object-oriented programming skills to deliver enthralling user interfaces with captivating responsiveness for immersive user experience. Recursively pushing variables into an array of abilities that already includes proficiency in HTML, CSS, JavaScript, jQuery, Node and frameworks and/or libraries like React, Bootstrap, Material UI etc </p>
            </AboutInfo>
            <Technologies />
        </AboutContainer>
    )
}

export default AboutMe

const AboutContainer = styled.section`
    padding: 80px 0;
    background-color: ${props => props.theme.background};
    transition: 200ms;
    scroll-snap-align: start;

    &:hover {
        p::after {
            width: 75%;
        }
    }
`

const SectionHeader = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    color: #444;

    > h1 {
        color: brown;
        font-family: 'Antonio', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: left;
        letter-spacing: 3px;
        margin: 0 auto;
    }

    > p {
        text-transform: uppercase;
        color: ${props => props.theme.title};
        font-family: 'Poppins', sans-serif;
        letter-spacing: 2px;
        margin: 0 auto;
    }
`

const AboutInfo = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 60px auto 0 auto;
    color: #222;
    font-size: 12px;
    overflow-wrap: break-word;

    > img {
        object-fit: cover;
        height: 200px;
        width: 200px;
        transition: 200ms;
        border-radius: 5%;
        border: 3px solid  ${props => props.theme.title};
        box-shadow: 7px 5px 5px ${props => props.theme.shadow};
    }

    > p {
        font-family: 'Poppins', sans-serif;
        max-width: 600px;
        color: ${props => props.theme.title};
        align-self: flex-start;
        line-height: 30px;
        text-align: justify;
        margin-top: 25px;
    }


    @media screen and (min-width: 700px) {
        display: flex;
         
        > P {
            margin-top: 0;
            margin-left: 30px;
        }
    }
`
