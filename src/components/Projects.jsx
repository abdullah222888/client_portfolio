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
  width: "100%", // Full width of the container
  maxWidth: "540px", // Maximum width for larger screens
  borderRadius: "10px",
  overflow: "hidden",
  borderColor: "#00ffee",
  borderWidth: "3px",
  borderStyle: "solid",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column", // Stack image and content vertically
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const ProjectImage = styled(CardMedia)({
  height: "200px", // Adjust height to fit within the card
  width: "100%",
  objectFit: "cover", // Ensure the image covers the card area without distortion
});

const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  opacity: 0, // Initially hidden
  transition: "opacity 0.3s ease-in-out",
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%", // Ensure content covers the full card height
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Align content at the bottom
  "&:hover": {
    opacity: 1, // Show on hover
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
      image: "proj1.jpg",
      name: "Exercises App",
      description:
        "A beginner-friendly fitness app providing diet plans, exercise videos, and personalized features like sleep and wake-up alarms to guide users in implementing chest exercises effectively..",
      link: "https://www.figma.com/file/t6PR7Z384LRxcVQQuJALiD/Fitness-Mobile-App-UI-by-tMinus1-Design-(Community)?type=design&node-id=1403-17678&mode=design&t=neGw1oCcip9w7qLR-0",
    },
    {
      image: "proj22.jpg",
      name: "Booking App",
      description:
        "A Flutter-based booking app for ear doctor appointments, featuring Google Maps integration to locate patients and doctors efficiently..",
      link: "https://www.figma.com/design/1oINvOkTXftPCGqMGFjBx1/Booking-app?node-id=45-207&p=f&t=WcAFWEDQ5lHGFb4M-0",
    },
    {
      image: "proj3.jpg",
      name: "Social Media Platform",
      description:
        "A Flutter-based e-commerce app with integrated social media features, enabling follow/unfollow, likes, and messaging between users who mutually follow each other.",
      link: "https://www.figma.com/file/I9wapLely5y8lxlZI7yjy7?type=design",
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
