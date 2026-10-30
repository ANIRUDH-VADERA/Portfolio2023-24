import React,{useRef} from 'react'
import "./Projects.css";
import { motion } from "framer-motion";

import { projects } from "../../constants";
import {SectionWrapper } from "../../hoc";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
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
              {link && <a href={link} target="_blank" rel="noreferrer"><button className="btn1">View project</button></a>}
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

    return (
    <div className='ProjectsPage' id="Projects">
        <div className="ProjectsHeaderPanel">
          <div>
              <p className='AboutH2'>My work</p>
              <h2 className={`AboutH1`}>Projects.</h2>
          </div>

          <p className='AboutP'>
            Selected production initiatives, hackathon builds, and university projects that show how I approach scale, reliability, applied AI, and practical engineering.
          </p>
        </div>


        

        <div className="gallery projects section-wrapper gallery-wrap" ref={ref}>
              {projects.map((image, index) => (
              <GalleryItem
                  key={index}
                  index={index}
                  {...image}
                  />
              ))}
        </div>

        
    </div>
  )
}

export default SectionWrapper(Projects,"projects");