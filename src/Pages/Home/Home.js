import React,{useEffect} from 'react'
import { motion } from "framer-motion";
import "./Home.css";
import Parallax from 'parallax-js'
import Typed from "typed.js";

import bgImg from "../../images/background.webp"
import rockImg from "../../images/rock.png";
import earthImg from "../../images/earth.webp";
import midImg from "../../images/mid.webp";
import foreImg from "../../images/foreground.webp";


function Home() {
    const el = React.useRef(null);
      const typed = React.useRef(null);
  
    const handleClick = ()=>{
      const element = document.getElementById("About");
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }


    useEffect(() => {
      const options = {
          strings: [
          ' SOFTWARE ENGINEER III',
          ' DATA PLATFORM ENGINEER',
          ' SCALA & PYTHON DEVELOPER',
          ' CLOUD FINTECH BUILDER',
          ' EVENT-DRIVEN SYSTEMS ENGINEER'
        ],
        startDelay: 300,
        backDelay: 1000,
        typeSpeed: 80,
        backSpeed: 80,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "!"
      };
      
      typed.current = new Typed(el.current, options);
      
      return () => {
        typed.current.destroy();
      }
    }, []);
  
    useEffect(()=>{
      const scene = document.getElementById("scene");
      const parallaxInstance = new Parallax(scene);
      // Parallax runs its own animation loop; pause it while the hero is scrolled away
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          parallaxInstance.enable();
        } else {
          parallaxInstance.disable();
        }
      });
      observer.observe(scene);

      return () => {
        observer.disconnect();
        parallaxInstance.destroy();
      };
    },[]);
  
    return (
    <section className="home" id="Home">
        <div id="scene" className="screen">
            <div data-depth="0.1" className="bg">
            <img src={bgImg} alt="" />
            </div>
            <div data-depth="0.2" className="rock1">
            <img src={rockImg} alt="" />
            </div>
            <div data-depth="1.2" className="earth">
            <img src={earthImg} alt="" />
            </div>
            <div data-depth="0.1" className="text">
            <div className="left"> 
                <h2 className="firsth2">Hey, I am</h2>
                <h1 id="main_first_page_text">ANIRUDH VADERA </h1>
                <h2>I am a <span className="toChange" ref={el}> </span></h2>
                <p className="heroSummary">I build distributed finance platforms, event-driven data pipelines, and cloud systems at Walmart Global Tech.</p>
                <div className="heroActions">
                  <a href="mailto:anirudhvadera@gmail.com" target="_blank" rel="noreferrer">Contact me</a>
                  <a href="https://github.com/ANIRUDH-VADERA" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/anirudh-vadera-8836ba237/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://leetcode.com/u/anirudh00711/" target="_blank" rel="noreferrer">LeetCode</a>
                </div>
            </div>
            </div>
            <div data-depth="0.4" className="mid">
            <img src={midImg} alt="" />
            </div>
            <div data-depth="0.1" className="fore">
            <img src={foreImg} alt="" />
            </div>
      </div>
        <div className='smallMouse'>
            <button type="button" onClick = {handleClick} className="scrollIndicator" aria-label="Scroll to about section">
            <div className='smallMouseDiv'>
                <motion.div
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='mouseMotionDiv'
                />
            </div>
            </button>
        </div>
    </section>
  )
}

export default Home