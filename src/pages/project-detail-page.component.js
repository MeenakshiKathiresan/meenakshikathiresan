import React from 'react';
import { useParams, Link } from "react-router-dom";
import "../css/global.css";
import "../css/project-detail.css";
import projects from "../data/projects.json";
import works from "../data/work.json";

import { LuCircleDot } from "react-icons/lu";
import LinkBadge from "../components/link-badge.component";

import TagList from '../components/tag-list.component';




const ProjectDetail = () => {

    const { id } = useParams();
    const {companyId, projectId} = useParams();

    const languages = ["python", "C++"]
    const tools = ["git"]
    const libraries = ["pathlib"]

    const project = id? projects.projects[id] : works.works[companyId].projects[projectId]
    console.log(project)


    return (
        <div className="parent-div">
            {companyId? <Link to={`/companyprojects/${companyId}`}> Back to {works.works[companyId].company_name} projects</Link> :""}
           
            <div className="container">

                <div className="d-flex justify-content-between ">
                    <div className="heading-text ">
                        {project.heading}
                        {project.links.map((link) => {
                    return <LinkBadge
                        websiteLink={link.website_link}
                        linkname={link.linkname}
                        icon={link.icon}
                        color={link.color}
                    />
                })}
                    </div>
                    <div>
                        {project.startDate}
                    </div>
                </div>

                <div className="pt-4">
                    <TagList tags={project.languages} className="language-tag" />
                    <TagList tags={project.tools} className="tools-tag" />
                    <TagList tags={project.libraries} className="libraries-tag" />
                </div>

                
                <div className="pt-4 key-features">
                <b>Key features</b>

                    {project.features.map((feature) => {
                        return <div>
                            <span> <LuCircleDot /> </span> &nbsp;
                            <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </div>

                    })}
                </div>

                    <div className="p-4">
                <img className="project-image" src={project.main_image} />
                </div>
                <div className=" heading-line sub-heading-text">
                    Project Impact
                </div>

                <div>
                
                    {project.project_impact}
                </div>
            




            </div>





        </div>
    )
}

export default ProjectDetail