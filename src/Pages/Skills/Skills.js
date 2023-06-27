import React from 'react'
import BallCanvas from "../../Components/canvas/Ball.js"
import {SectionWrapper } from "../../hoc";
import {technologies} from "../../constants";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import "./Skills.css"

function Skills() {
  return (
    <div className="mainSkill" id="Skills">
        <motion.div variants={textVariant()}>
            <p className="AboutH2">What i have aquired so far</p>
            <h2 className="AboutH1">Skills.</h2>
        </motion.div>
        <div className="Skills">
            {technologies.map((technology)=>(
                <div className="Skill" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Skills,"skills");