import React, { useEffect } from 'react'
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { projectList } from '.././sourceData/data'
import Project from './Project';




function Projects () {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return (
        <section className="projects" id="projects">
            <p>A collection of project use cases/case studies</p>
            <h1>PORTFOLIO PROJECTS</h1>

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