import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Project from './Project';
import { projectList } from '.././sourceData/data'

const projectType = ["all", ...new Set(projectList.map(project => project.type))]
console.log(projectType);

function Projects () {
    const [filteredProjects, setFilteredProjects] = useState(projectList)

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    const filterProjectsByType = (type) => {
        const filteredByType = projectList.filter(project => project.type === type)
        setFilteredProjects(filteredByType)

        if(type === "all"){
            setFilteredProjects(projectList)
        }
    }

    return (
        <ProjectsWrap id="projects">
            <p>A collection of project use cases from my recent works</p>
            <h1>PROJECTS/WORKS</h1>

            <FilterCategories>
                FILTER BY CATEGORIES: <br/>
                {
                    projectType.map((type, index) => {
                        return (
                            <button id={index} onClick={() => filterProjectsByType(type)}>{type}</button>
                        )
                    })
                }
            </FilterCategories>

            <ProjectsContainer>
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
    min-height: 100vh;
    padding: 50px 2rem;
    /* background-color: rgba(245, 233, 230, 0.564); */
    background-color: #eee;
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

const FilterCategories = styled.div`
    margin-top: 20px;
    /* text-align: center;/ */

    > button {
            text-transform: uppercase;
            color: white;
            background-color: #333; 
            margin-right: 3px;
            padding: 7px 10px;
            box-shadow: 0 0 2px black;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 11px;
            font-weight: 900;
            cursor: pointer;
            letter-spacing: 2px;
            outline: none;
            border: none;
            transition: 2000ms cubic-bezier(0.19, 1, 0.22, 1);
                
            &:hover {
                background-color: rgb(95, 10, 10);  
            }
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