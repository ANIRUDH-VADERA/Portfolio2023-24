import React,{useRef} from 'react'
import "./Education.css";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import aps from "../../images/aps.jpg";
import vit from "../../images/vit.avif";
import { timelineElements } from "../../constants";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import useOnScreen from "../../hooks/useOnScreen";
import { motion } from "framer-motion";
import {textVariant } from "../../utils/motion";
import {SectionWrapper } from "../../hoc";
import cn from "classnames";

function Education() {
  
    let workIconStyles = { background: "#087F8C" };
    let schoolIconStyles = { background: "#F59E0B" };
  
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);
  
  
  return (
    <section className="education" id="Education">
        <motion.div variants={textVariant()}>
            <p className="AboutH2">Where I have studied so far</p>
            <h2 className="AboutH1">Education.</h2>
        </motion.div>
        <div className="mainVerticalTimeline">
        <VerticalTimeline>
            {timelineElements.map((element)=>{
                
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
                                        {element.school === "vit" && <img src={vit} alt="Vellore Institute of Technology" />}
                                        {element.school === "aps" && <img src={aps} alt="Army Public School" />}
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
                                    <p className="AboutP p1">{element.add}</p>
                                    <p className='AboutP' id="description">{element.description}</p>
                                </div>
                        </div>
                    </VerticalTimelineElement>
                )    
            })}
        </VerticalTimeline>
        </div>

    </section>
  )
}

export default SectionWrapper(Education,"education");