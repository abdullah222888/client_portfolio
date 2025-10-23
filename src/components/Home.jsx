import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./ProfilePicture.css";
import "./Home.css"; // New CSS file for hover effects
import Services from "./Services";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "auto",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "2rem 1rem", md: "0" },
        justifyContent: "center",
      }}
    >
      {/* Profile Picture Section */}
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "70vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "2rem", md: "0" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            className="profile-border"
          >
            <img
              src="abaid.jpg"
              alt="Profile"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Grid>

      {/* Text Section */}
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "70vh" },
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          justifyContent: "center",
          paddingLeft: { xs: "0", md: "1.5rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontFamily: "YourChosenFont",
              color: "white",
            }}
          >
            HI, it's <strong style={{ color: "#00ffee" }}>M Abadidullah</strong>
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              fontFamily: "YourChosenFont",
              color: "white",
            }}
          >
            I'm a{" "}
            <strong style={{ color: "#00ffee" }} className="animate-text">
              Front End Developer
            </strong>
          </Typography>
          <Typography
            sx={{
              fontFamily: "YourChosenFont",
              color: "white",
              marginTop: "1rem",
            }}
          >
            I’m a skilled Frontend Developer specializing in React.js, with
            experience building responsive and interactive web interfaces. I
            focus on clean code, performance, and user-friendly design to
            deliver high-quality user experiences. I have hands-on experience
            with React Hooks, component-based architecture, and modern UI
            libraries. In addition to React, I’m also proficient in PHP and
            WordPress development, creating dynamic and customizable websites
            with strong attention to functionality and performance. I’m familiar
            with frontend development using the .NET Framework as well. I thrive
            in collaborative environments and am passionate about learning new
            tools and technologies to stay current in modern frontend
            development.
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <motion.a
            href="https://linkedin.com/in/m-abaidullah-zaid786"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="icon-hover"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/mabaidzaid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="icon-hover"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mabaidullahzaid?igsh=c292b3F0bzlkMmpj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="icon-hover"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://x.com/mzmeer520?s=21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="icon-hover"
          >
            <WhatsAppIcon />
          </motion.a>
        </Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="contained"
            color="primary"
            href="/abaidresume copy.pdf"
            download="Abaid-Resume.pdf"
            sx={{
              backgroundColor: "black",
              color: "#00ffee",
              border: "2px solid #00ffee",
              borderRadius: "5px",
              marginTop: "1rem",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#00ffee",
                color: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            Download CV
          </Button>
        </motion.div>
      </Grid>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            marginTop: "2rem",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: "2rem",
            gap: { xs: "1rem", md: "0" },
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#00ffee",
                textAlign: "center",
              }}
            >
              01
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
            >
              Years
              <br />
              Experience
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#00ffee",
                textAlign: "center",
              }}
            >
              04
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
            >
              Projects
              <br />
              Completed
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#00ffee",
                textAlign: "center",
              }}
            >
              06
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
            >
              Technologies
              <br />
              Mastered
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#00ffee",
                textAlign: "center",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
            >
              Code
              <br />
              Commits
            </Typography>
          </Grid>
        </Grid>
      </motion.div>
      <Divider />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Services />
        <Projects />
      </motion.div>

      <Education />
      <Contact />
    </Grid>
  );
};

export default Home;
