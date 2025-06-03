import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code is my priority. I follow best practices and design patterns to ensure scalability.',
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: 'Creative Design',
      description: 'I combine technical expertise with creative thinking to build visually appealing and user-friendly interfaces.',
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Development',
      description: 'I focus on rapid development without compromising quality, using modern tools and frameworks.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: 8,
      }}
    >
      {/* Animated background elements */}
      <Box
        className="cyber-grid"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 1,
          }}
        />
      ))}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6}>
          {/* Left side - Image and decorative elements */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Decorative circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    border: '2px solid rgba(255, 42, 109, 0.2)',
                    borderRadius: '50%',
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    border: '2px solid rgba(176, 38, 255, 0.2)',
                    borderRadius: '50%',
                  }}
                />

                {/* Profile image container */}
                <Box
                  className="cyber-glow"
                  sx={{
                    width: '300px',
                    height: '300px',
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: 'linear-gradient(45deg, #FF2A6D, #B026FF, #05D9E8)',
                      borderRadius: '50%',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/profile.jpg"
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                className="cyber-text"
                sx={{
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF2A6D, #B026FF)',
                  },
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                className="text-neon-blue"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                I'm a passionate software developer with a keen eye for detail and a love for creating
                exceptional digital experiences. With expertise in both frontend and backend development,
                I bring ideas to life through clean, efficient code and innovative solutions.
              </Typography>

              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        className="cyber-glow"
                        elevation={0}
                        sx={{
                          p: 3,
                          height: '100%',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 2,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        <Box
                          className="text-neon-pink"
                          sx={{
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(255, 42, 109, 0.1)',
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          className="text-neon-blue"
                          sx={{
                            mb: 1,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 