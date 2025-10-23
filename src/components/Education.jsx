import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <section className="education" id="education">
        <h2 className="heading">Education</h2>

        <div className="timeline-items">
          {/* High School */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-19</div>
            <div className="timeline-content">
              <h3>High School</h3>
              <p>
                I completed my high school education at{" "}
                <b>Govt. Model High School Vehari</b>, specializing in the{" "}
                <b>Medical</b> field. During this time, I built a strong
                academic foundation and developed an early interest in science
                and technology, which later inspired my transition toward
                software development.
              </p>
            </div>
          </div>

          {/* College */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019-21</div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>
                I pursued my Intermediate studies in <b>Pre-Medical</b> from
                <b> Punjab College Vehari</b>, achieving an <b>A+</b> grade.
                This period enhanced my analytical and logical thinking skills,
                preparing me for the technical challenges I would face in my
                software career.
              </p>
            </div>
          </div>

          {/* University */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021-25</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>
                I’m currently pursuing a{" "}
                <b>Bachelor’s in Software Engineering (BSSE)</b> from
                <b> NFC Institute of Engineering and Technology, Multan</b>,
                maintaining a<b> 3.5 CGPA</b>. Through this program, I’ve gained
                strong expertise in software development, algorithms, web
                technologies, and real-world problem-solving.
              </p>
            </div>
          </div>

          {/* Flutter Developer Course */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Flutter Developer Course</h3>
              <p>
                Completed a professional Flutter development course from{" "}
                <b>Codex</b>, mastering cross-platform app development with{" "}
                <b>Dart</b>. Learned to design responsive UIs, integrate REST
                APIs, and optimize app performance for Android and iOS
                platforms.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Certifications</h3>
              <p>
                • <b>Build a Full Website using WordPress</b> – Coursera
                <br />
                Gained hands-on experience in creating, customizing, and
                deploying full-featured WordPress websites using modern themes
                and plugins.
              </p>
              <p>
                • <b>Introduction to Front-End Development</b> – Meta
                <br />
                Developed a solid understanding of{" "}
                <b>HTML, CSS, JavaScript, and React.js</b>
                for building responsive and user-focused web interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;
