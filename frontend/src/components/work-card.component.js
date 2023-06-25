import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import LinkBadge from "./link-badge.component";
import { Link } from "react-router-dom";


const WorkCard = () => {

    const languages = ["python", "C++"]
    const tools = ["git"]
    const libraries = ["pathlib"]

    const [isOpen, setOpen] = useState(false);

    const handleViewAllClick = (event)=>{
        event.stopPropagation();
    }


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">Game developer intern</h5>
                    <div>Sept 2022 - Dec 2022

                        <div className="btn px-4 m-0">
                            {!isOpen ? (
                                <IoMdArrowDropdownCircle size={30} />
                            ) : (

                                <IoMdArrowDropupCircle size={30} />
                            )}
                        </div>
                    </div>
                </div>
                <p className="work-card__tag">Light pong</p>

                <div className="d-flex">
                    {languages.map((language) => {
                        return <div className="tag language-tag"> {language} </div>
                    })}

                    {tools.map((tool) => {
                        return <div className="tag tools-tag"> {tool} </div>
                    })}

                    {libraries.map((library) => {
                        return <div className="tag libraries-tag"> {library} </div>
                    })}

                </div>
                <br />

                {isOpen && (
                    <div>
                        Achievements: own ideas: <br />
                        Impact on company growth:<br />
                        Impact on company growth:<br />
                        Impact on company growth:<br />
                        Impact on company growth:
                        <br />


                        <div className="d-flex">
                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<RiGlobalLine size={24} color="white" />}
                                color ="#575757"
                            />

                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<RiGlobalLine size={24} color="white" />}
                                color ="#575757"
                            />

                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<RiGlobalLine size={24} color="white" />}
                                color ="#575757"
                            />
                            
                        </div>
                        <Link className="button" onClick={handleViewAllClick} to="/projects">
                            View all projects
                        </Link>
                    
                        
                        

                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default WorkCard;