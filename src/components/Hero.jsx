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
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        pt: { xs: 8, md: 10 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 42, 109, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
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
          opacity: 0.3,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
          border: '2px solid rgba(255, 42, 109, 0.15)',
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
          border: '2px solid rgba(5, 217, 232, 0.15)',
          transform: 'rotate(45deg)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid 
          container 
          spacing={{ xs: 2, md: 4 }} 
          alignItems="center"
          sx={{
            minHeight: { xs: 'calc(100vh - 80px)', md: 'calc(100vh - 100px)' },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Left side - Main content */}
          <Grid 
            item 
            xs={12} 
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
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
                  display: 'inline-block',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255, 42, 109, 0.1), rgba(176, 38, 255, 0.1))',
                    zIndex: -1,
                    borderRadius: '4px',
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
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF2A6D, #B026FF)',
                  },
                }}
              >
                Rishi.
              </Typography>

              <Box
                sx={{
                  mb: 4,
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h2"
                  className="gradient-text"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
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
              </Box>

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

              <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
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
                    background: 'linear-gradient(45deg, #FF2A6D, #B026FF)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #B026FF, #FF2A6D)',
                    },
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
                    borderColor: 'rgba(255, 42, 109, 0.5)',
                    '&:hover': {
                      borderColor: '#FF2A6D',
                      background: 'rgba(255, 42, 109, 0.1)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Decorative elements */}
          <Grid 
            item 
            xs={12} 
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: '300px', md: 'auto' },
              mt: { xs: 2, md: 0 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '400px', md: '600px' },
                  height: { xs: '400px', md: '600px' },
                  opacity: 0.3,
                }}
              >
                {/* Central hexagon */}
                <Box
                  className="cyber-glow"
                  sx={{
                    width: '100%',
                    height: '100%',
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
                      width: '100%',
                      height: '100%',
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
                      width: '100%',
                      height: '100%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '30px',
                        height: '30px',
                        transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateX(${index === 0 ? '250px' : '300px'})`,
                        background: `linear-gradient(45deg, ${index === 0 ? '#FF2A6D' : index === 1 ? '#B026FF' : '#05D9E8'}, transparent)`,
                        borderRadius: '50%',
                        boxShadow: `0 0 30px ${index === 0 ? '#FF2A6D' : index === 1 ? '#B026FF' : '#05D9E8'}`,
                        opacity: 0.5,
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
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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