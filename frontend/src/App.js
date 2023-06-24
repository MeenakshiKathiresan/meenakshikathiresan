import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.component';
import NavBar from './components/navbar.component';

function App() {
  return (
    <div>
   
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
