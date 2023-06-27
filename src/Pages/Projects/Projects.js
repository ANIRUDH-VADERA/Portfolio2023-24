import React,{useState,useEffect,useRef} from 'react'
import "./Projects.css";
import { motion } from "framer-motion";

import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import {SectionWrapper } from "../../hoc";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { Scrollbars } from 'react-custom-scrollbars';
import { Curve } from 'three';
import { slideIn } from "../../utils/motion.js";

function GalleryItem({
    src,
    info,
    subtitle,
    title,
    index,
    link,
    desc
  }) {

    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);


    return (
      <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      >
          <div></div>
          <div className={"gallery-item"}>
            <motion.div  
              variants={slideIn("left", "tween", 0.2, 1)}
            className="gallery-item-info">
              <h1 className="gallery-info-title">{title}</h1>
              <h2 className="gallery-info-subtitle">{subtitle}</h2>
              <p className="gallery-info-category">{info}</p>
              <p className="AboutP">{desc}</p>
              <a href={link}><button className="btn1">Click here to view the project</button></a>
            </motion.div >
            <div
              className="gallery-item-image"
              style={{ backgroundImage: `url(${src})`}}
            ></div>
          </div>
          <div></div>
        </div>
    );
  }


function Projects() {
    const ref = useRef(null);
    
    const renderThumb = ({ style, ...props }) => {
      const thumbStyle = {
          backgroundColor: `white`,
          cursor: 'pointer'
      };
      return (
          <div
              style={{ ...style, ...thumbStyle }}
              {...props}/>
      );
    };

    return (
    <div className='ProjectsPage' id="Projects">
        <motion.div variants={textVariant()}>
            <p className='AboutH2'>My work</p>
            <h2 className={`AboutH1`}>Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='AboutP'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>


        

        <div className="gallery projects section-wrapper gallery-wrap" ref={ref}>
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className='scrollbar'
                renderThumbVertical={renderThumb}
            >
              {projects.map((image, index) => (
              <GalleryItem
                  key={index}
                  index={index}
                  {...image}
                  />
              ))}
              </Scrollbars>
        </div>

        
    </div>
  )
}

export default SectionWrapper(Projects,"projects");