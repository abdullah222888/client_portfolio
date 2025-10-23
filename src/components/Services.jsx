import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="services-container">
          {/* PHP Developer */}
          <div className="service-box">
            <div className="service-info">
              <h4>PHP Development</h4>
              <p>
                I’m an experienced PHP developer focused on building fast,
                secure, and scalable web applications. With a strong command of
                backend logic, APIs, and database integration, I create dynamic
                and high-performing websites that deliver seamless user
                experiences. I emphasize clean, maintainable code and follow
                modern PHP practices to ensure efficient and future-ready
                solutions.
              </p>
            </div>
          </div>

          {/* WordPress Developer */}
          <div className="service-box">
            <div className="service-info">
              <h4>WordPress Development</h4>
              <p>
                As a WordPress developer, I design and develop fully customized,
                responsive, and SEO-friendly websites. From creating bespoke
                themes and plugins to optimizing performance and security, I
                ensure every site is visually appealing, functional, and easy to
                manage. My goal is to turn creative ideas into professional
                WordPress solutions that help businesses grow online.
              </p>
            </div>
          </div>

          {/* Frontend Developer */}
          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>
                I specialize in modern frontend development using React.js to
                build responsive, fast, and interactive web interfaces. With a
                strong focus on UI/UX, component-based architecture, and
                performance optimization, I deliver visually stunning designs
                that work seamlessly across all devices. My approach blends
                clean code, design precision, and cutting-edge technologies for
                an exceptional user experience.
              </p>
            </div>
          </div>

          {/* Content Writing */}
          <div className="service-box">
            <div className="service-info">
              <h4>Content Writing</h4>
              <p>
                As a creative content writer, I craft engaging, informative, and
                SEO-optimized content that connects with audiences and enhances
                brand identity. From blogs and web copy to technical writing and
                social media content, I focus on clarity, storytelling, and
                audience engagement to help brands communicate their message
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
