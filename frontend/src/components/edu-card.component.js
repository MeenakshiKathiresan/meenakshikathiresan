import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"
import TagList from "./tag-list.component"

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import LinkBadge from "./link-badge.component";
import { Link } from "react-router-dom";

const EduCard = ({ edu }) => {
    const [isOpen, setOpen] = useState(false);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">{edu.school_name}</h5>
                    <div>{edu.end_date}
                        <div className="btn px-4 m-0">
                            {!isOpen ? (
                                <IoMdArrowDropdownCircle size={30} />
                            ) : (

                                <IoMdArrowDropupCircle size={30} />
                            )}
                        </div>


                    </div>
                </div>
                <p className="work-card__tag">{edu.degree} in {edu.major}</p>

                {isOpen && (
                    <div>
                        <TagList tags={edu.courses} className="libraries-tag" />

                    <br/>
                        <div>
                            Achievements: {edu.achievement}

                        </div>
                        <br/>

                        {edu.links.map((link) => {
                            return <LinkBadge
                                websiteLink={link.website_link}
                                linkname={link.linkname}
                                icon={link.icon}
                                color={link.color}
                            />
                        })}
                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default EduCard;