import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"
import TagList from "./tag-list.component"

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import LinkBadge from "./link-badge.component";
import { Link } from "react-router-dom";
import certificate from "../assets/AWS.pdf";

const Certification = ({ cert }) => {
    const [isOpen, setOpen] = useState(false);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">{cert.name}</h5>
                    <div>{cert.end_date}
                        <div className="btn px-4 m-0">
                            {!isOpen ? (
                                <IoMdArrowDropdownCircle size={30} />
                            ) : (

                                <IoMdArrowDropupCircle size={30} />
                            )}
                        </div>


                    </div>
                </div>
                <p className="work-card__tag">{cert.institute}</p>

                {isOpen && (
                    <div>
                        {cert.score}
                        <Link to={certificate} target="_blank">

                            <div className="button w-50 " style={{ float: "None" }}>
                                View Certificate
                            </div> </Link>

                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default Certification;