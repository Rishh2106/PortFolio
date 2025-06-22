import { Box, Container, Typography, Grid, Paper, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import VisibilityIcon from '@mui/icons-material/Visibility';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, Material-UI, and Framer Motion. Features smooth animations, dark mode, and a clean design.',
    technologies: ['React', 'Material-UI', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Rishh2106/portfolio',
    live: 'https://your-portfolio-url.com',
    image: '/portfolio-preview.png',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Stripe'],
    github: 'https://github.com/Rishh2106/ecommerce',
    live: 'https://your-ecommerce-url.com',
    image: '/ecommerce-preview.png',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Rishh2106/task-manager',
    live: 'https://your-taskmanager-url.com',
    image: '/taskmanager-preview.png',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #64ffda 30%, #4cc9b7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .project-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      className="project-image"
                      sx={{
                        width: '100%',
                        height: 200,
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: 1,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    >
                      <Box
                        className="project-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(10, 25, 47, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      >
                        <IconButton
                          color="primary"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.2)',
                            },
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.2)',
                            },
                          }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                      <Typography variant="body1" color="primary">
                        Project Preview Image
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      color="primary"
                      gutterBottom
                      sx={{
                        background: 'linear-gradient(45deg, #64ffda 30%, #4cc9b7 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Typography
                          key={techIndex}
                          variant="body2"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: 'primary.main',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: '4px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: '4px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 