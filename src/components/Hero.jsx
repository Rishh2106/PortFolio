import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
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
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          border: '2px solid rgba(255, 42, 109, 0.3)',
          transform: 'rotate(45deg)',
          zIndex: 1,
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          border: '2px solid rgba(5, 217, 232, 0.3)',
          transform: 'rotate(45deg)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Main content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                className="cyber-corner"
                sx={{
                  mb: 4,
                  p: 3,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255, 42, 109, 0.1), rgba(176, 38, 255, 0.1))',
                    zIndex: -1,
                  },
                }}
              >
                <Typewriter
                  options={{
                    strings: ['Hi, my name is'],
                    autoStart: true,
                    loop: false,
                    cursor: '|',
                    delay: 50,
                    deleteSpeed: 50,
                    wrapperClassName: 'typewriter-text',
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                className="cyber-text"
                sx={{
                  mb: 3,
                  fontSize: { xs: '3.5rem', md: '5rem' },
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
                Rishi.
              </Typography>

              <Typography
                variant="h2"
                className="gradient-text"
                sx={{
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      'I build things for the web.',
                      'I create modern web applications.',
                      'I develop full-stack solutions.',
                      'I craft digital experiences.',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </Typography>

              <Typography
                variant="body1"
                className="text-neon-blue"
                sx={{
                  maxWidth: '600px',
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                I'm a software developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products using
                modern technologies like React, Spring Boot, and more.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <Button
                  variant="contained"
                  className="btn-cyber"
                  size="large"
                  component={Link}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    minWidth: '180px',
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  className="neon-border"
                  size="large"
                  component={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'text.primary',
                    minWidth: '180px',
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Decorative elements */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                {/* Central hexagon */}
                <Box
                  className="cyber-glow"
                  sx={{
                    width: '300px',
                    height: '300px',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(255, 42, 109, 0.1), rgba(176, 38, 255, 0.1))',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    },
                  }}
                >
                  {/* Rotating border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '320px',
                      height: '320px',
                      border: '2px solid',
                      borderImage: 'linear-gradient(45deg, #FF2A6D, #B026FF, #05D9E8) 1',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  />
                </Box>

                {/* Orbiting elements */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '400px',
                      height: '400px',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '20px',
                        height: '20px',
                        transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateX(200px)`,
                        background: `linear-gradient(45deg, ${index === 0 ? '#FF2A6D' : index === 1 ? '#B026FF' : '#05D9E8'}, transparent)`,
                        borderRadius: '50%',
                        boxShadow: `0 0 20px ${index === 0 ? '#FF2A6D' : index === 1 ? '#B026FF' : '#05D9E8'}`,
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Box
            component={Link}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cyber-glow"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="body2"
              className="text-neon-pink"
              sx={{
                mb: 1,
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            >
              Scroll Down
            </Typography>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  color: 'neon.pink',
                  fontSize: '2rem',
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 