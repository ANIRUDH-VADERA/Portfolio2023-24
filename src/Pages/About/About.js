import React from 'react'
import "./About.css"
import { motion } from "framer-motion";

import {Tilt} from "react-tilt";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import {SectionWrapper } from "../../hoc";
import {Link} from 'react-router-dom';

function About() {
    
    
    const ServiceCard = ({ index, title,desc, icon,link }) => (
        <Tilt className='aboutTilt'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='aboutTiltMotionCard'
          >
            <Link to={link}>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='aboutMainCard'
            >
              <img
                src={icon}
                alt='web-development'
                className='aboutImg'
              />
      
              <h3 className='AboutH1'>
                {title}
              </h3>
              <p className='AboutP'>{desc}</p>
            </div>
            </Link>
          </motion.div>
        </Tilt>
      );
  
  
  
    return (
    <section className="About" id="About">
        <motion.div variants={textVariant()}>
            <p className="AboutH2">Introduction</p>
            <h2 className="AboutH1">Overview.</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='AboutP'
        >
          > I am a Final Year Student at Vellore Institute of Technology, Vellore, pursuing B.Tech in Computer Science. I am an FullStack Web Developer with good knowledge of front-end techniques who loves structure and order and I also stand for quality. 
        </motion.p>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='AboutP'
        >
          > I love to do Competetitive Coding as well. <br></br>
          > I have solved 600+ problems on LeetCode.<br></br>
          > Highest Rating: 1891(LeetCode Knight).<br></br>
          > I mainly code in Python.
        </motion.p>


        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='AboutP'
        >
          > Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
        </motion.p>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='AboutP'
        >
          💬 Ask me about DSA, Web Development<br></br>
          🥅 2023 Goals: Learn more about ThreeJS, Desktop Applications, and have a strong hold on DSA skills.
        </motion.p>

        <div className='aboutCards'>
            {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </section>
  )
}

export default SectionWrapper(About,"about");