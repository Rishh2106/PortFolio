import { AppBar, Toolbar, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { Link } from 'react-scroll';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 