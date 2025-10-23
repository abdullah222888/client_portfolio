import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const ProjectCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "540px",
  borderRadius: "10px",
  overflow: "hidden",
  borderColor: "#00ffee",
  borderWidth: "3px",
  borderStyle: "solid",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const ProjectImage = styled(CardMedia)({
  height: "200px",
  width: "100%",
  objectFit: "cover",
});

const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  "&:hover": {
    opacity: 1,
  },
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  backgroundColor: "#00ffee",
  color: "black",
  "&:hover": {
    backgroundColor: "#00c6c6",
    color: "black",
  },
}));

const Projects = () => {
  const projectData = [
    {
      image: "Stove Genie Logo.jpg",
      name: "Stove Genie",
      description:
        "A Flutter app with an AI chatbot for recipe generation and a mini TV for live cooking channels — your smart kitchen companion.",
      link: "https://www.figma.com/design/stove-genie",
    },
    {
      image: "s1.png",
      name: "ReCellMart",
      description:
        "An e-commerce platform for premium pre-owned smartphones, offering verified iPhones, Samsung, and Pixel devices at great prices.",
      link: "https://www.recellmart.com",
    },
    {
      image: "main.png",
      name: "Pannel News",
      description:
        "A modern online news platform delivering accurate, unbiased, and timely coverage of politics, sports, and national affairs.",
      link: "https://www.pannalnews.com",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontSize: "40px", fontWeight: "800" }}
            >
              PROJECTS
            </Typography>
          </Grid>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard>
                <ProjectImage image={project.image} alt={project.name} />
                <ProjectCardContent>
                  <Typography variant="h6" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Box sx={{ mt: 2 }}>
                    <ProjectButton
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </ProjectButton>
                    <ProjectButton variant="contained">Read More</ProjectButton>
                  </Box>
                </ProjectCardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;
