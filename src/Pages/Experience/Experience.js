import React,{useRef} from "react";
import { motion } from "framer-motion";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import {SectionWrapper } from "../../hoc";
import { experience } from "../../constants";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../../utils/motion";
import useOnScreen from "../../hooks/useOnScreen";
import "./Experience.css"
import walmart from "../../images/walmart.png";
import adg from "../../images/adg.jpg";
import cn from "classnames";




const Experience = () => {

  let workIconStyles = { background: "#6B27F8" };
  let schoolIconStyles = { background: "#9362FA" };

  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  return (
    <section className="experience" id="Experience">
      <motion.div variants={textVariant()}>
        <p className='AboutH2'>Here my journey begins.</p>
        <h2 className='AboutH1'>Work Experience.</h2>
      </motion.div>

      <div className='ExperienceParaDiv'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='AboutP'
        >
          Brief description about my journey as a software developer and internships that i have done so far. I was also lucky to work with few of the best clubs and chapters available in my college.
        </motion.p>
      </div>



      <div className="mainVerticalTimeline">
        <VerticalTimeline>
            {experience.map((element)=>{
                
                let isWorkIcon = element.icon === "work";
                
                return(
                    <VerticalTimelineElement
                        key={element.key}
                        date = {element.date}
                        dateClassName = "date"
                        iconStyle = {isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon = {isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        className={cn("card")}
                        contentStyle={{background:"#1F1F1F",borderRadius:"12px"}}
                        contentArrowStyle={{borderRight : '10px solid #1F1F1F'}}
                    >
                        <div
                        className={cn("", { "is-reveal": onScreen })}
                        ref = {ref}
                        >
                                <div 
                                    className={cn("one")}
                                >
                                    <div className={cn("gallery-item-image")}>
                                        {element.school === "walmart" && <img src={walmart} />}
                                        {element.school === "adg" && <img src={adg} />}
                                    </div>
                                    <div className="image_overlay image overlay_blur">
                                        <div className="overlay_title">
                                            <p className="image_description">
                                                <a
                                                className={`button ${
                                                    isWorkIcon ? "workButton" : "schoolButton"
                                                }`}
                                                href={element.buttonUrl}
                                                >
                                                    {element.buttonText}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="two">
                                    <h3 className="AboutH1 vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <h5 className="AboutH1 vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                    <p className='AboutP' id="description">{element.desc1}</p>
                                    <p className='AboutP' id="description">{element.desc2}</p>
                                    <p className='AboutP' id="description">{element.desc3}</p>
                                </div>
                        </div>
                    </VerticalTimelineElement>
                )    
            })}
        </VerticalTimeline>
        </div>

      
    </section>
  );
};

export default SectionWrapper(Experience, "experience");