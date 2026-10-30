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
                // Sections are taller than the screen on mobile, so a 25% visibility threshold never fires and content stays hidden
                viewport={{ once: true, amount: 'some' }}
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