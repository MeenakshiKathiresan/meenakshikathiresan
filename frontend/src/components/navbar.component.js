import { div } from 'prelude-ls';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/global.css"
import "../css/navbar.css"

const NavBar = () => {

    const tabs = {
        home: "Home",
        works: "Works",
        projects: "Projects",
    }

    const [activeTab, setActiveTab] = useState(tabs.home)

    const handleToggleTab = (tab) => {
        console.log(tab)
        setActiveTab(tab)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bar ">
                <div className="parent-div d-flex justify-content-between p-1 w-100">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <li className="nav-item">
                                <Link className={`nav-link ${activeTab === tabs.home ? 'nav-bar__item--active' : 'nav-bar__item'}`} onClick={() => handleToggleTab(tabs.home)} to="/" >
                                   <b>Meenakshi Kathiresan</b> 
                                </Link>
                            </li>

                           

                        </ul>


                    </div>

                    <div>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <div className="nav-bar-right">
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeTab === tabs.home ? 'nav-bar__item--active' : 'nav-bar__item'}`} onClick={() => handleToggleTab(tabs.home)} to="/">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${activeTab === tabs.works ? 'nav-bar__item--active' : 'nav-bar__item'}`} onClick={() => handleToggleTab(tabs.works)} to="/works">
                                        Works
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link ${activeTab === tabs.projects ? 'nav-bar__item--active' : 'nav-bar__item'}`} onClick={() => handleToggleTab(tabs.projects)} to="/projects">
                                        Projects
                                    </Link>
                                </li>



                            </div>

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;