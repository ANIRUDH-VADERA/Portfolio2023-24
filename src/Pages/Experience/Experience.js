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
import cn from "classnames";




const Experience = () => {

    let workIconStyles = { background: "#087F8C" };
    let schoolIconStyles = { background: "#F59E0B" };

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
                                        A timeline of my engineering roles and promotions, with emphasis on distributed finance systems, data platform work, and measurable delivery outcomes.
        </motion.p>
      </div>


      <div className="mainVerticalTimeline">
        <VerticalTimeline>
            {experience.map((element)=>{
                
                let isWorkIcon = element.icon === "work";
                
                return(
                    <VerticalTimelineElement
                        key={element.id}
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
                                        {element.school === "walmart" && <img src={walmart} alt="Walmart Global Tech" />}
                                    </div>
                                    <div className="image_overlay image overlay_blur">
                                        <div className="overlay_title">
                                            <p className="image_description">
                                                <a
                                                className={`button ${
                                                    isWorkIcon ? "workButton" : "schoolButton"
                                                }`}
                                                href={element.buttonUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                >
                                                    {element.buttonText}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="two">
                                    <span className="timelineDateBadge">{element.date}</span>
                                    <h3 className="AboutH1 vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <h5 className="AboutH1 vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                                                        <ul className="experienceDetails">
                                                                            {element.details.map((detail) => (
                                                                                <li key={detail}>{detail}</li>
                                                                            ))}
                                                                        </ul>
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