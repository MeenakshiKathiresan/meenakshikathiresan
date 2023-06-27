import React from 'react';
import ProjectCard from '../components/project-card.component';
import {Link} from "react-router-dom" 
import projects from "../data/projects.json";

const Projects = () => {

    const p = [1, 2, 3, 4]

    return (
        <div className="parent-div content">
           
            <div className="row">
              
                {projects.projects.map((project) => (
                    <div className="col-sm-4">
                        <Link className="" to={`/projects/${project.id}`} style={{textDecoration:'none'}}>
                        <ProjectCard project={project}/>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Projects