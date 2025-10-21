import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
    >
      <section className="education" id="education">
        <h2 className="heading">Education</h2>

        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-19</div>
            <div className="timeline-content">
              <h3> High School</h3>
              <p>
                I completed my schooling at Edify High School, where I
                consistently achieved A grades. The rigorous academic
                environment helped me develop a strong foundation in subjects
                like computer science, mathematics, and physics. My time there
                shaped my passion for technology and innovation.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019-21</div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>
                I completed my Intermediate in Computer Science (ICS) from City
                College Science & commerce Multan with a focus on Physics,
                Computer Science, and Mathematics. This foundation has provided
                me with a strong analytical mindset, technical skills, and
                problem-solving abilities, laying the groundwork for my future
                in software development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021-25</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>
                I completed my Bachelor's in Computer Science from BZU
                University, where I developed proficient skills in software
                development, problem-solving, and data structures. The program
                provided me with a solid foundation in computer science
                principles and practical experience in various technologies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Flutter Developer Course</h3>
              <p>
                Completed a comprehensive Flutter development course from Codex,
                gaining expertise in building cross-platform mobile applications
                with Dart. Proficient in creating intuitive UIs, integrating
                APIs, and optimizing app performance for both Android and iOS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
