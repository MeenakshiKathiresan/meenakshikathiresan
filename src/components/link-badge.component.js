import React from "react";
import { Link } from "react-router-dom";
import "../css/link-badge.css";

import { RiGlobalLine } from "react-icons/ri"
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"

const LinkBadge = ({ websiteLink, linkname, icon, color }) => {

    const handleClick = (event) => {
        event.stopPropagation();
    };


    const getIcon = (iconName) => {
        switch (iconName) {
            case "github":
                return <AiFillGithub size={24} color="white" />;
            case "youtube":
                return <AiFillYoutube size={24} color="white" />;
            default:
                return null;
        }
    }

    return (
        <div>
            <Link to={websiteLink} target="_blank" style={{ textDecoration: 'none' }} onClick={handleClick}>
                <div className="d-flex align-middle">

                    <div className="link-box d-flex">
                        <div className="link-box__icon-holder" style={{ backgroundColor: color }}>
                            <div className="d-flex justify-content-center pt-1 pb-1">
                                {getIcon(icon)}
                            </div>
                        </div>
                        <div className="pt-1">
                            {linkname}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LinkBadge
