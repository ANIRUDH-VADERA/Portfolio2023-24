import React from 'react'
import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/motion.js';
import "./SectionWrapper.css";

function SectionWrapper(Component,idName) {
  return (
    function HOC(){
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className="AllSections"
            >
                <span className='hash-span' id={idName}>
                </span>
                <Component />
            </motion.section>
        )
    }
  )
}

export default SectionWrapper