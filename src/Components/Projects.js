import { useEffect } from 'react'
import styled from 'styled-components'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Project from './Project';
import { projectList } from '.././sourceData/data'





function Projects () {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return (
        <ProjectsWrap id="projects">
            <p>A collection of project use cases from my recent works</p>
            <h1>PROJECTS/WORKS</h1>

            <ProjectsContainer>
                {
                    projectList.map((project, index) => {
                        return (
                           <Project {...project} key={index} />
                        )
                    })
                }
            </ProjectsContainer>
        </ProjectsWrap>
    )
}

export default Projects

const ProjectsWrap = styled.section`
    min-height: 100vh;
    padding: 50px 2rem;
    background-color: rgba(245, 233, 230, 0.564);
    transition: 500ms;

    &:hover {
        padding-top: 100px;
    }
    
    > h1 {
        /* text-align: center; */
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

    @media screen and (min-width: 1000px) {
        padding: 50px 4rem;
    }
`

const ProjectsContainer = styled.div`
    margin: 60px auto 0 auto;
    display: grid;
    grid-gap: 20px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`