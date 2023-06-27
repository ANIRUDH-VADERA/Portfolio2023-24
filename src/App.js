import './App.css';
import Home from "./Pages/Home/Home.js";
import Navbar from './Components/Navbar/Navbar.js';
import About from "./Pages/About/About.js";
import Education from './Pages/Education/Education.js';
import Skills from './Pages/Skills/Skills.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';
import StarsCanvas from './Components/canvas/Stars.js';

import WorkExperience from "./Pages/Experience/Experience.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
      <Navbar />
        <Home />
        <About />
        <Education />
        <WorkExperience />
        <div className="starsCanvas">
          <Skills />
          <StarsCanvas />
        </div>
        <Projects />    
        <div className="starsCanvas">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
