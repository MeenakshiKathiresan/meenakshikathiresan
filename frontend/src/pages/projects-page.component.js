import React from 'react';
import ProjectCard from '../components/project-card.component';
import {Link} from "react-router-dom" 

const Projects = () => {

    const p = [1, 2, 3, 4]

    return (
        <div className="parent-div content">
            <br/>
            <div className="row">
                {p.map((x) => (
                    <div className="col-sm-4">
                        <Link className="" to="/projects/1" style={{textDecoration:'none'}}>
                        <ProjectCard />
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Projects