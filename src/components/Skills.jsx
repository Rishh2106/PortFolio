import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';

const skills = [
  {
    category: 'Frontend Development',
    icon: <BrushIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Material-UI'],
  },
  {
    category: 'Backend Development',
    icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Development Tools',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['Git', 'GitHub', 'VSCode', 'IntelliJ', 'Cursor'],
  },
  {
    category: 'Programming',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms'],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skillGroup, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {skillGroup.icon}
                      <Typography
                        variant="h6"
                        sx={{ ml: 1, color: 'primary.main' }}
                      >
                        {skillGroup.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Typography
                          key={skillIndex}
                          variant="body2"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: 'primary.main',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
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

export default Skills; 