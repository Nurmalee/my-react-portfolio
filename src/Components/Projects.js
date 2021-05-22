import { useState } from 'react'
import styled from 'styled-components'

import Project from './Project';
import { projectList } from '.././sourceData/data'

const projectType = ["all", ...new Set(projectList.map(project => project.type))]

function Projects (props) {
    const [filteredProjects, setFilteredProjects] = useState(projectList)
    const [currentCategory, setCurrentCategory] = useState(0)

    const filterProjectsByType = (e, type) => {
        setCurrentCategory(Number(e.target.id))
        const filteredByType = projectList.filter(project => project.type === type)
        setFilteredProjects(filteredByType)

        if(type === "all"){
            setFilteredProjects(projectList)
        }

        
    }

    return (
        <ProjectsWrap id="projects" >
            <SectionHeader>
                <p>use cases from my recent works</p>
                <h1>PROJECTS/WORKS</h1>
            </SectionHeader>

            <ProjectCategories>
                <p> FILTER BY CATEGORY: </p> <br/>
                {
                    projectType.map((type, index) => {
                        return (
                            <button key={index} id={index} onClick={(e) => filterProjectsByType(e, type)} className={currentCategory === index ? 'activeCategory' : null}>{type}</button>
                        )
                    })
                }
            </ProjectCategories>

            <ProjectsContainer className='project'>
                {
                    filteredProjects.map((project, index) => {
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
    padding: 80px 0;
    margin: 0 auto;
    background-color: ${props => props.theme.background};
`

const SectionHeader = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    color: ${props => props.theme.title};

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
        color: ${props => props.theme.titleColor};
        font-family: 'Poppins', sans-serif;
        letter-spacing: 2px;
        margin: 0 auto;
    }
`

const ProjectCategories = styled.div`
    color: ${props => props.theme.title};
    transition: 500ms;
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;

    > button {
            text-transform: uppercase;
            /* color: ${props => props.theme.title}; */
            color: #444;
            /* background-color: ${props => props.theme.background}; */
            margin-right: 3px;
            padding: 7px 10px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 11px;
            font-weight: 900;
            cursor: pointer;
            letter-spacing: 2px;
            outline: none;
            border: 1px solid ${props => props.theme.title};
            transition: 200ms;
                
            &:hover {
                color: ${props => props.theme.background};
                background-color: ${props => props.theme.title};
            }
    }
`

const ProjectsContainer = styled.div`
    margin: 60px auto 0 auto;
    display: grid;
    grid-gap: 20px;
    width: 90vw;
    max-width: 1000px;

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`