import React from "react";
import { Link } from "react-router-dom";
import "../css/global.css";

const LinkBadge = ({ websiteLink, companyName, icon, color }) => {

    const handleClick = (event) => {
        event.stopPropagation();
      };

    return (
        <div>
            <Link to={websiteLink} target="_blank" style={{ textDecoration: 'none' }} onClick={handleClick}>
                <div className="d-flex align-middle">

                    <div className="link-box d-flex">
                        <div className="link-box__icon-holder" style={{backgroundColor:color}}>
                            <div className="d-flex justify-content-center pt-1 pb-1">
                                {icon}
                            </div>
                        </div>
                        <div className="pt-1">
                            {companyName}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LinkBadge
