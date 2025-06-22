import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <AppBar 
      position="fixed" 
      className={`glass-effect ${scrolled ? 'neon-border' : ''}`}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box
            component={Link}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cyber-text"
            sx={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            RISHIKESH JAIN
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <Button
                key={item}
                component={Link}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-neon-blue"
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  '&:hover': {
                    color: 'neon.pink',
                    textShadow: '0 0 10px rgba(255, 16, 240, 0.5)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 