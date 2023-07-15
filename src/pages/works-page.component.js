import React from 'react';
import WorkCard from '../components/work-card.component';
import works from "../data/work.json";
import schools from "../data/education.json";
import "../css/global.css";
import EduCard from '../components/edu-card.component';
import Certification from '../components/certification.component';

const Works = () => {

    const p = [1, 2, 3]
    return (
        <div className="parent-div content">
            <div className="global-heading">
            Work experience
            </div>
            <div className="row">
                {works.works.map((exp) => (
                    <div>
                        <WorkCard exp={exp}/>
                    </div>
                ))}
            </div>
            <br/>
            <div className="global-heading">
            Education
            </div>
            <div className="row">
                {schools.education.map((edu) => (
                    <div>
                        <EduCard edu={edu}/>
                    </div>
                ))}
            </div>
            <br/>
            <div className="global-heading">
            Certification
            </div>
            <div className="row">
                {schools.certifications.map((cert) => (
                    <div>
                        <Certification cert={cert}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Works