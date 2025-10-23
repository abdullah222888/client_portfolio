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
                secure, and scalable web applications. With strong expertise in
                backend logic, APIs, and database integration, I develop
                high-performing and reliable systems that deliver smooth user
                experiences.
              </p>
            </div>
          </div>

          {/* WordPress Developer */}
          <div className="service-box">
            <div className="service-info">
              <h4>WordPress Development</h4>
              <p>
                As a WordPress developer, I design and build fully customized,
                responsive, and SEO-friendly websites. From custom themes to
                plugin development, I create visually appealing and
                easy-to-manage sites that help businesses stand out online.
              </p>
            </div>
          </div>

          {/* Web Developer */}
          <div className="service-box">
            <div className="service-info">
              <h4>Web Development</h4>
              <p>
                I specialize in modern web development using <b>WordPress</b>,
                <b> React.js</b>, and other JavaScript frameworks. My focus is
                on creating fast, responsive, and user-friendly websites with
                clean design, strong functionality, and seamless performance
                across all devices.
              </p>
            </div>
          </div>

          {/* Content Writing */}
          <div className="service-box">
            <div className="service-info">
              <h4>Content Writing</h4>
              <p>
                As a creative content writer, I craft engaging and SEO-optimized
                content that enhances brand voice and audience engagement. From
                blogs to web copy, I deliver clear and impactful writing that
                supports business goals and connects with readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
