import React, { useState } from 'react';
import "../css/home.css"
import axios from 'axios';
import Typewriter from "typewriter-effect";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';

import TagList from '../components/tag-list.component';
import resume from "../assets/Resume - Meenakshi Kathriesan.pdf"

import { AiFillCheckCircle } from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"


import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

import projects from "../data/projects.json";

import ProjectCardCarousel from '../components/project-card-carousel.component';

import { GrCaretNext, GrCaretPrevious, GrCatetNext } from "react-icons/gr";
import Footer from '../components/footer.component';
import zIndex from '@material-ui/core/styles/zIndex';
import LeetcodeCard from '../components/leetcode-card.component';


const Home = () => {

    const languages = ["JavaScript", "TypeScript", "Python", "C#"]
    const halfLanguages = ["C++", "Java"]
    const webTechnolgies = ["React", "Express", "Node", "Django", "HTML", "CSS", "RESTful API"]
    const halfWebTechnolgies = ["Angular"]
    const cloudTechnologies = ["AWS", "Firebase"]
    const gameEngine = ["Unity 3D", "phaser"]
    const database = ["MySQL", "PostgreSQL", "Mongo DB"]
    const tools = ["git", "Android Studio", "agile"]

    const leetcode_topics = ["Arrays", "Strings", "Linked List", " Two pointers", "Sorting", "Matrix", "Hash table", "Stack", "Queue", "Binary search", "Binary Search Tree", "Binary Tree", "Directed Graphs", "Undirected Graphs", "Depth First Search", "Breadth First Search"]

    const [leetcodeData, setLeetcodeData] = useState({})

    const category = {
        easy: 'EASY',
        medium: 'MEDIUM',
        hard: 'HARD',
    };

    const getLeetcodeData = () => {
        {

            axios.get('https://leetcode-stats-api.herokuapp.com/meenakshikathiresan')
                .then(response => {
                    // Handle the retrieved data
                    console.log(response.data);
                    setLeetcodeData(response.data);
                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                })
        }
    }
    return (
        <div className="parent-div parent-div-top content">
            {leetcodeData? "":getLeetcodeData()}

            <div className="home-parent-container">

                <div className="home-container">
                    <div>
                        <div className="helloiam">
                            Hello, I am
                        </div>

                        <div className="myname">
                            Meenakshi Kathiresan
                        </div>

                        <div className="rolename">
                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter

                                        .pauseFor(100)
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

                                style={{ zIndex: '0' }}
                            />



                        </div>


                    </div>
                    <div>
                        <img className="profile-pic" src="https://i.imgur.com/sRvaGpj.png" />
                    </div>


                </div>
                <div className="d-flex">
                    <div className="link-button">
                        <Link to="https://www.linkedin.com/in/meenakshi-kathiresan-494184182/" target="_blank">
                            <AiFillLinkedin size={window.innerWidth <= 768 ? 20 : 30} color={"#0077B5"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="https://github.com/MeenakshiKathiresan" target="_blank">
                            <AiFillGithub size={window.innerWidth <= 768 ? 20 : 30} color={"#171717"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="mailto:meenakshikathiresan3@gmail.com" target="_blank">
                            <BiLogoGmail size={window.innerWidth <= 768 ? 20 : 30} color={"#c71610"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="discordapp.com/users/Meenakshi#0571" target="_blank">
                            <BsDiscord size={window.innerWidth <= 768 ? 20 : 30} color={"#738ADB"} />{console.log("innerwidth", window.innerWidth)}
                        </Link>
                    </div>

                </div>


            </div>


            <div className="columns">
                <div className="about-me section left-section">
                    <div className=" section-box section-height lh-lg">
                        <div className="section-heading">
                            About me
                        </div>

                        <div className="section-content">
                            I am a full stack developer with four years of programming experience.
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            My skills extend to both front-end and back-end technologies, <br /> <br />

                            Throughout my journey, I have gained expertise in various aspects of software development.
                            Throughout my journey, I have gained expertise in various aspects of software development.

                            <br /> <br />
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            various aspects of software development.

                            <br />


                        </div>

                        <Link to={resume} target="_blank">

                            <div className="button" style={{ float: "None" }}>
                                View Resume
                            </div>
                        </Link>
                    </div>


                </div>



                <div className="skills ">
                    <div className="section ">

                        <div className="section-box section-height">
                            <div className="section-heading">
                                Skills
                            </div>
                            <div >

                                <div className="section-sub-heading">
                                    Languages
                                </div>
                                <div className="d-flex">

                                </div>
                                <TagList tags={languages} faintTags={halfLanguages} className="language-tag" />

                                <div className="section-sub-heading">
                                    Web technologies
                                </div>
                                <TagList tags={webTechnolgies} faintTags={halfWebTechnolgies} className="tools-tag" />

                                <div className="section-sub-heading">
                                    Database
                                </div>
                                <TagList tags={database} className="database-tag" />

                                <div className="section-sub-heading">
                                    Cloud technologies
                                </div>
                                <TagList tags={cloudTechnologies} className="cloud-tag" />

                                <div className="section-sub-heading">
                                    Game engine
                                </div>
                                <TagList tags={gameEngine} className="libraries-tag" />
                                <div className="section-sub-heading">
                                    Others
                                </div>
                                <TagList tags={tools} className="libraries-tag" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <Link to="https://leetcode.com/Meenakshikathiresan/" style={{ textDecoration: "none" }} target="_blank">
                    <div className="section-heading leetcode-section">
                        <span>
                            <SiLeetcode />
                        </span>
                        Leetcode - {leetcodeData.totalSolved ? leetcodeData.totalSolved : '311'} problems solved
                    </div>
                    <TagList tags={[]} faintTags={leetcode_topics} className={"libraries-tag"} />
                    <div className="section-content">
                        Solved over ..
                    </div>


                    <div class="">
                        <div class="row">
                            <LeetcodeCard category={category.easy} count={leetcodeData.easySolved ? leetcodeData.easySolved : '162'} className={`leetcode-card--easy`}></LeetcodeCard>
                            <LeetcodeCard category={category.medium} count={leetcodeData.mediumSolved ? leetcodeData.mediumSolved : '135'} className={`leetcode-card--medium`}></LeetcodeCard>
                            <LeetcodeCard category={category.hard} count={leetcodeData.hardSolved ? leetcodeData.hardSolved : '14'} className={`leetcode-card--hard`}></LeetcodeCard>

                        </div>
                    </div>
                </Link>


            </div>

            <div className="section ">
                <div className="section-box" style={{ padding: 0 }}>
                    <div className="section-heading text-center pt-2">
                        Projects
                    </div>

                    <div className="">

                        <Carousel >
                            {projects.projects.map((project) => (
                                <div className="carousel-card">
                                    <Link className="" to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>

                                        <ProjectCardCarousel project={project} cardWidth={"30rem"} displayTag={false} />

                                    </Link>
                                </div>
                            ))}

                        </Carousel>

                    </div>
                </div>
            </div>



        </div>
    )
}



export default Home