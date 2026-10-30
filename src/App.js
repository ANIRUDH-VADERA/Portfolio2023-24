import './App.css';
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home.js";
import Navbar from './Components/Navbar/Navbar.js';
import About from "./Pages/About/About.js";
import Education from './Pages/Education/Education.js';
import Skills from './Pages/Skills/Skills.js';
import Projects from './Pages/Projects/Projects.js';
import Campus from './Pages/Campus/Campus.js';
import Contact from './Pages/Contact/Contact.js';
import StarsCanvas from './Components/canvas/Stars.js';
import CustomCursor from "./CustomCursor";
import Loader from "./Loader/index.js";

import WorkExperience from "./Pages/Experience/Experience.js"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setPreLoader(false);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
    <CustomCursor down={false} />
    {preLoader ? <Loader msg = "Loading..." /> :
      <Router >
      <div className="App">
      <Navbar />
        <Home />
        <About />
        <WorkExperience />
        <div className="starsCanvas">
          <Skills />
          <StarsCanvas />
        </div>
        <Projects />    
        <Education />
        <Campus />
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
