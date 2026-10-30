import React from 'react'
import "./About.css"
import { motion } from "framer-motion";

import {Tilt} from "react-tilt";
import { achievementHighlights, certifications, impactHighlights, services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import {SectionWrapper } from "../../hoc";

function About() {
    const ServiceCard = ({ index, title,desc, icon,link }) => (
        <Tilt className='aboutTilt'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='aboutTiltMotionCard'
          >
            <a href={link} target="_blank" rel="noreferrer">
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
                alt={title}
                className='aboutImg'
              />
      
              <h3 className='AboutH1'>
                {title}
              </h3>
              <p className='AboutP'>{desc}</p>
            </div>
            </a>
          </motion.div>
        </Tilt>
      );
  
    return (
    <section className="About" id="About">
        <motion.div variants={textVariant()}>
            <p className="AboutH2">Introduction</p>
            <h2 className="AboutH1">Overview.</h2>
        </motion.div>

        <motion.ul variants={fadeIn("", "", 0.1, 1)} className="overviewSummaryList">
          <li>Software Engineer III with 2+ years of experience building distributed systems, event-driven financial platforms, microservices, back-end services, and large-scale data pipelines at Walmart Global Tech.</li>
          <li>Own services in Walmart's financial ledger platform that records about 85% of Walmart's revenue and processes 1M+ transactions per day.</li>
          <li>Delivered impact in reconciliation, event processing, and cloud archival: $45,000/year savings, 50% fewer production failures, hours-to-minutes runtimes, and hourly batch re-architected to sub-second streaming.</li>
          <li>Hands-on across Scala, Python, Spark, Kafka, PostgreSQL, Google Cloud Platform, Kubernetes, ArgoCD, LLM/RAG prototypes, and event-driven architecture.</li>
        </motion.ul>

        <div className="impactGrid">
          {impactHighlights.map((highlight) => (
            <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className="impactCard" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </motion.div>
          ))}
        </div>

        <div className='aboutCards'>
            {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>

        <div className="aboutDetailGrid">
          <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)} className="aboutDetailPanel">
            <h3>Achievements</h3>
            <ul>
              {achievementHighlights.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("left", "spring", 0.1, 0.75)} className="aboutDetailPanel">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </motion.div>
        </div>
    </section>
  )
}

export default SectionWrapper(About,"about");