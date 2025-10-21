import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
    >
      <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Desktop Application Development</h4>
              <p>
                I’m a passionate desktop application developer with a strong
                focus on building user-friendly and efficient software for
                Windows platforms. Skilled in .NET frameworks like WinForms and
                WPF, I create responsive, intuitive applications that solve
                real-world problems. I prioritize clean, maintainable code and
                continuously sharpen my skills with the latest tools and
                technologies.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Developer</h4>
              <p>
                As a frontend developer specializing in React Native, I build
                visually appealing, high-performance mobile applications for
                both Android and iOS. With a strong grasp of React Native
                components, hooks, and best practices, I focus on delivering
                seamless, intuitive user experiences. I prioritize clean,
                maintainable code, responsive design, and cross-platform
                consistency to create apps that are both functional and
                user-friendly.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Graphic Designer</h4>
              <p>
                As a graphic designer, I create visually compelling and
                high-impact designs that enhance user engagement and brand
                identity. I specialize in crafting dynamic layouts, eye-catching
                visuals, and intuitive designs across digital platforms. With a
                strong focus on creativity and detail, I deliver designs that
                are not only aesthetically appealing but also strategically
                aligned with the project’s goals.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Content Writer</h4>
              <p>
                As a content writer, I craft clear, engaging, and impactful
                content tailored to diverse audiences and platforms. With a
                strong command of language and storytelling, I deliver
                well-researched articles, blogs, and copy that inform, inspire,
                and drive action. My focus is on producing high-quality content
                that aligns with brand voice, enhances user engagement, and
                meets strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
