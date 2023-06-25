import React from 'react';
import { useParams } from "react-router-dom";
import "../css/global.css";
import "../css/project-detail.css";

import { RiGlobalLine } from "react-icons/ri"

import {AiFillGithub, AiFillYoutube} from "react-icons/ai"
import LinkBadge from "../components/link-badge.component";


const ProjectDetail = () => {

    const { id } = useParams();

    const languages = ["python", "C++"]
    const tools = ["git"]
    const libraries = ["pathlib"]

    return (
        <div className="parent-div">
            <div className="container">
                <div className="d-flex justify-content-between ">
                    <div className="heading-text ">
                        project name
                    </div>
                    <div>
                        December, 2022
                    </div>

                    
                </div>
                <div className="d-flex">
                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<RiGlobalLine size={24} color="white"  />}
                                color ="#c4302b"
                            />

                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<AiFillYoutube size={24} color="white" />}
                                color ="#c4302b"
                            />

                            <LinkBadge
                                websiteLink="https://hammerplay.com/"
                                companyName="Company Website"
                                icon={<AiFillGithub size={24} color="white" />}
                                color ="#575757"
                            />
                        </div>
                
                <br />
                A full stack ecommerce website to sign in, view & search products, add to cart, check out,
                make payment and view order history. Google OAuth is used as a third party to sign in. Paypal
                sandbox is used for payment integration. Images are loaded from AWS S3 bucket and the website
                is deployed on heroku.
                <br />  <br />
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

                <img className="project-image" src="https://i.pinimg.com/564x/6d/06/bd/6d06bdea6571e265f77dd2ee005c3733.jpg" />

                <br />


                <div className=" heading-line sub-heading-text">
                    Project Impact
                </div>

                <div>
                <br />
                    A full stack ecommerce website to sign in, view & search products, add to cart, check out,
                    make payment and view order history. Google OAuth is used as a third party to sign in. Paypal
                    sandbox is used for payment integration. Images are loaded from AWS S3 bucket and the website
                    is deployed on heroku.
                </div>
                <br/>

               


            </div>





        </div>
    )
}

export default ProjectDetail