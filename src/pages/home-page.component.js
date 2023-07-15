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
import { BsFillTriangleFill, BsFillSquareFill, BsFillPentagonFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"


import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

import projects from "../data/projects.json";

import ProjectCardCarousel from '../components/project-card-carousel.component';

import { GrCaretNext, GrCaretPrevious, GrCatetNext } from "react-icons/gr";
import Footer from '../components/footer.component';


const category = {
    easy: 'EASY',
    medium: 'MEDIUM',
    hard: 'HARD',
};

const LeetcodeCard = ({ category, count, className }) => {

    const getIcon = (iconName) => {
        switch (iconName) {
            case "EASY":
                return <BsFillTriangleFill size={75} color="white" />;
            case "MEDIUM":
                return <BsFillSquareFill size={75} color="white" />;
            case "HARD":
                return <BsFillPentagonFill size={75} color="white" />;
            default:
                return null;
        }
    }


    return (
        <div class="col-md-4">
            <div class={`card ${className} leetcode-card`}>
                <div class="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="leetcode__icon">

                            {getIcon(category)}
                        </div>
                        <div class="card-text leetcode-card__text">{category}</div>

                        <div class="card-title leetcode-card__number">{count}</div>
                    </div>
                </div>
            </div>
        </div>)
}



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
            {getLeetcodeData()}

            <div className="parent-container">

                <div className="home-container">
                    <div>
                        <h4>Hello, I am</h4>

                        <h1>

                            Meenakshi Kathiresan
                        </h1>


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




            </div>
            <br /><br /><br /><br /><br />

            <div className="columns">
                <div className="about-me left-section">
                    <div className="section lh-lg about-me-content">
                        <div className="section-heading">
                            About me
                        </div>

                        <div className="section-sub-heading pt-2">
                            I am a full stack developer with four years of programming experience.
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            My skills extend to both front-end and back-end technologies, <br /> <br />

                            Throughout my journey, I have gained expertise in various aspects of software development.
                            Throughout my journey, I have gained expertise in various aspects of software development.

                            <br /> <br />
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            Throughout my journey, I have gained expertise in various aspects of software development.
                            various aspects of software development.

                            <br /> <br />

                            <Link to={resume} target="_blank">

                                <div className="button w-50 " style={{ float: "None" }}>
                                    View Resume
                                </div>
                            </Link>
                            <br /> <br />
                        </div>
                    </div>

                </div>



                <div className="skills section">
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


            <div>
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


            <br /><br /><br />


            <div className="d-flex">

           




                <div className="w-100">
                    <div className="section ">
                        <div className="section-heading text-center">
                            Projects
                        </div>

                        <div className="section-sub-heading ">

                            <Carousel>
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

        
        </div>
    )
}



export default Home