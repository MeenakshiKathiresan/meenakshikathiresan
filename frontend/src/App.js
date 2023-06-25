import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar.component';

import Home from './pages/home-page.component';
import Resume from './pages/resume-page.component';
import Works from './pages/works-page.component';
import Projects from './pages/projects-page.component';
import AboutMe from './pages/about-me-page.component';
import ProjectDetail from './pages/project-detail-page.component';

function App() {
  return (
    <div className="App-color">
   
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/about-me" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDetail/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
