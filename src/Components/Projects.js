import React from 'react'
import './Projects.css'
import { projectList } from '.././sourceData/data'
import Project from './Project';


function Projects () {
    return (
        <section className="projects" id="projects">
            <h1>PORTFOLIO PROJECTS</h1>
            <div className="underlines"></div>

            <div className="projects-container">
                {
                    projectList.map((project, index) => {
                        return (
                           <Project {...project} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects