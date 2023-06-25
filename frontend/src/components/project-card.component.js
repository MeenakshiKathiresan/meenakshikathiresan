import React from "react";
import "../css/project-card.css"

const ProjectCard = () => {


    return (<div className="pt-4">

        <div className="card project-card">
            
            <img className="project-card__image p-2" src="https://lh3.googleusercontent.com/7PoLcOh1bDmrlxz4ZrJK_VnlcUv7ATdaNLm3eOUOIjAGctQhqcAM73-T1uznL2Celw53XdM9GrzKz76MRjdhuT0-=w640-h400-e365-rj-sc0x00ffffff" alt="Card image cap" />
            <div className="card-body project-card__body">
                <h5 className="project-card__title">Ecommerce website</h5>
                <p className="project-card__tag">Full stack website in django</p>
               
            </div>
        </div>

    </div>)
}

export default ProjectCard;