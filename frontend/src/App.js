import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar.component';

import Home from './pages/home-page.component';
import Resume from './pages/resume-page.component';
import Works from './pages/works-page.component';
import Projects from './pages/projects-page.component';
import AboutMe from './pages/about-me-page.component';
import ProjectDetail from './pages/project-detail-page.component';

import Footer from './components/footer.component';

function App() {
  return (
    <div className="App-color">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/companyprojects/:companyId" element={<Projects />} />
          <Route path="/companyprojects/:companyId/:projectId" element={<ProjectDetail />} />

        </Routes>
        <br />
        <Footer />
      </Router>


    </div>
  );
}

export default App;
