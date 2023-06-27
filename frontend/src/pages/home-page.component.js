import React from 'react';
import "../css/home.css"
import axios from 'axios';
import Typewriter from "typewriter-effect";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Home = () => {


    const getLeetcodeData = () => {
        {

            axios.get('https://leetcode-stats-api.herokuapp.com/meenakshikathiresan')
                .then(response => {
                    // Handle the retrieved data
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                })
        }
    }
    return (
        <div className="parent-div ">
            {getLeetcodeData()}

            <div className="parent-container">



                <div className="home-container">
                    <div>
                        <h4>Hello, I am</h4>

                        <h1>

                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter

                                        .typeString("Meenakshi Kathiresan")
                                        .start();
                                }}
                            />

                        </h1>


                        <Typewriter

                            onInit={(typewriter) => {
                                typewriter

                                    .pauseFor(3000)
                                    .deleteAll()
                                    .typeString("Software Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Game Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("UI/UX Specialist")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Full stack developer")
                                    .start();
                            }}
                        />
                    </div>
                    <div>
                        <img className="profile-pic" src="https://i.imgur.com/sRvaGpj.png" />
                    </div>




                </div>
                <div className="d-flex">
                    <div className="link-button">
                        <Link to="https://www.linkedin.com/in/meenakshi-kathiresan-494184182/" target="_blank">
                            <AiFillLinkedin size={30} color={"#0077B5"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="https://github.com/MeenakshiKathiresan" target="_blank">
                            <AiFillGithub size={30} color={"#171717"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="mailto:meenakshikathiresan3@gmail.com" target="_blank">
                            <BiLogoGmail size={30} color={"#c71610"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="discordapp.com/users/Meenakshi#0571" target="_blank">
                            <BsDiscord size={30} color={"#738ADB"} />
                        </Link>
                    </div>

                </div>




                <br /> <br /> <br /> <br />


            </div>
        </div>
    )
}

export default Home