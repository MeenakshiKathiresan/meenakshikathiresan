import React from 'react';
import ProjectCard from '../components/project-card.component';
import {Link, useParams} from "react-router-dom" 
import projectsData from "../data/projects.json";
import works from "../data/work.json"

const Projects = () => {

    const { companyId } = useParams();

    const projects = companyId? works.works[parseInt(companyId)].projects : projectsData.projects
    const heading = companyId? works.works[parseInt(companyId)].company_name : "Projects"
    

    return (
        
        <div className="parent-div content parent-div-top">
            <h4> {heading} </h4>
           
            <div className="row">
              
                {projects.map((project) => (
                    <div className="col-sm-4">
                        <Link className=""   to={companyId? `/companyprojects/${companyId}/${project.id}` : `/projects/${project.id}`} style={{textDecoration:'none'}}>
                        <ProjectCard project={project} displayTag ={true} />
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Projects