import './App.css';
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home.js";
import Navbar from './Components/Navbar/Navbar.js';
import About from "./Pages/About/About.js";
import Education from './Pages/Education/Education.js';
import Skills from './Pages/Skills/Skills.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';
import StarsCanvas from './Components/canvas/Stars.js';
import CustomCursor from "./CustomCursor";
import Loader from "./Loader/index.js";

import WorkExperience from "./Pages/Experience/Experience.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [down, setDown] = useState(false);

  const [preLoader, setPreLoader] = useState(true);

  const [isDesktop, setDesktop] = useState(window.innerWidth < 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 3000);
  }, [preLoader]);

  return (
    <>
    <CustomCursor down={down} />
    {isDesktop ?
      <div className="starsCanvas">
          <Loader msg = "Please View on Desktop" />  
          <StarsCanvas />
        </div>
      : 
      preLoader ? <Loader msg = "Loading..." /> :
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
    }
    </>
    
  );
}

export default App;
