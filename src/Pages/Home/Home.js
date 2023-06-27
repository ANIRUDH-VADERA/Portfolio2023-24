import React,{useEffect} from 'react'
import { motion } from "framer-motion";
import "./Home.css";
import Parallax from 'parallax-js'
import Typed from "typed.js";

import bgImg from "../../images/background.png"
import rockImg from "../../images/rock.png";
import earthImg from "../../images/earth.png";
import midImg from "../../images/mid.png";
import foreImg from "../../images/foreground.png";;


function Home() {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
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
          ' GAMER',
          ' CS ENGINEER',
          ' WEEB',
          ' WEB DEVELOPER',
          ' BINGE WATCHER',
          ' NIGHT CODER'
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
      var scene = document.getElementById("scene");
      var parallaxInstance = new Parallax(scene); 
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
                <h2 className="firsth2">Hey,i am</h2>
                <h1 id="main_first_page_text">ANIRUDH VADERA </h1>
                <h2>I am a <span className="toChange" ref={el}> </span></h2>
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
            <a onClick = {handleClick}>
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
            </a>
        </div>
    </section>
  )
}

export default Home