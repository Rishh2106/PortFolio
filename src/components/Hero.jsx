import { Box, Typography, Container, Button } from '@mui/material';
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
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mb: 2,
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              minHeight: '2.5rem',
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
            sx={{
              mb: 2,
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '4.5rem' },
              background: 'linear-gradient(45deg, #64ffda 30%, #4cc9b7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Rishi.
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
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
            sx={{
              maxWidth: '600px',
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products using
            modern technologies like React, Spring Boot, and more.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                borderRadius: '4px',
                textTransform: 'none',
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                background: 'linear-gradient(45deg, #64ffda 30%, #4cc9b7 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #4cc9b7 30%, #64ffda 90%)',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                borderRadius: '4px',
                textTransform: 'none',
                fontSize: '1rem',
                px: 4,
                py: 1.5,
                borderColor: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Box
              component={Link}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
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
                <KeyboardArrowDownIcon />
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 