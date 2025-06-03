import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF2A6D',
      light: '#FF4D8D',
      dark: '#CC1F56',
    },
    secondary: {
      main: '#05D9E8',
      light: '#33E0ED',
      dark: '#03B0BC',
    },
    accent: {
      main: '#FFD300',
      light: '#FFDC33',
      dark: '#CCAA00',
    },
    neon: {
      violet: '#B026FF',
      pink: '#FF10F0',
      blue: '#00FFFF',
      green: '#39FF14',
    },
    background: {
      default: '#000000',
      paper: '#0A0A0A',
      elevated: 'rgba(20, 20, 20, 0.8)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1F7FF',
      accent: '#FF2A6D',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #FF2A6D 0%, #B026FF 50%, #05D9E8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 30px rgba(255, 42, 109, 0.4)',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      background: 'linear-gradient(135deg, #FF10F0 0%, #00FFFF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '2.75rem',
      fontWeight: 600,
      background: 'linear-gradient(135deg, #FF2A6D 0%, #B026FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h4: {
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#FF10F0',
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#00FFFF',
    },
    h6: {
      fontSize: '1.35rem',
      fontWeight: 600,
      color: '#39FF14',
    },
    body1: {
      fontSize: '1.15rem',
      lineHeight: 1.8,
      color: '#D1F7FF',
    },
    body2: {
      fontSize: '1.05rem',
      lineHeight: 1.6,
      color: '#B8E6FF',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '14px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            transition: '0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #FF2A6D 0%, #B026FF 50%, #05D9E8 100%)',
          boxShadow: '0 4px 20px rgba(255, 42, 109, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 30px rgba(255, 42, 109, 0.6)',
            transform: 'translateY(-3px)',
          },
        },
        outlined: {
          border: '2px solid',
          borderImage: 'linear-gradient(135deg, #FF2A6D 0%, #B026FF 50%, #05D9E8 100%) 1',
          '&:hover': {
            background: 'rgba(255, 42, 109, 0.15)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 15, 15, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.15)',
          boxShadow: '0 8px 32px rgba(255, 42, 109, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 15, 15, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 42, 109, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(255, 42, 109, 0.25)',
            border: '1px solid rgba(255, 42, 109, 0.4)',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '3px solid',
          borderImage: 'linear-gradient(135deg, #FF2A6D 0%, #B026FF 50%, #05D9E8 100%) 1',
          boxShadow: '0 0 25px rgba(255, 42, 109, 0.4)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.08)',
            boxShadow: '0 0 35px rgba(255, 42, 109, 0.6)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="cyber-grid" />
        <div className="animated-gradient" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
