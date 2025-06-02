import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{ mb: 4, textAlign: 'center' }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1" paragraph>
                  Hello! I'm a passionate software developer with a strong foundation in both
                  frontend and backend technologies. My journey in software development
                  started with a curiosity for creating things that make a difference.
                </Typography>
                <Typography variant="body1" paragraph>
                  I specialize in building full-stack applications using modern technologies
                  like React, Spring Boot, and MySQL. My approach combines technical
                  expertise with a keen eye for user experience and clean code principles.
                </Typography>
                <Typography variant="body1">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing my knowledge with
                  the developer community.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Quick Facts
                </Typography>
                <Typography variant="body1" paragraph>
                  • Full-stack developer with expertise in Java and JavaScript
                </Typography>
                <Typography variant="body1" paragraph>
                  • Proficient in modern frameworks like React and Spring Boot
                </Typography>
                <Typography variant="body1" paragraph>
                  • Experience with database management using MySQL
                </Typography>
                <Typography variant="body1" paragraph>
                  • Skilled in version control with Git/GitHub
                </Typography>
                <Typography variant="body1">
                  • Familiar with IDEs like VSCode, Cursor, and IntelliJ
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 