import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Container, Typography, Paper, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider, CssBaseline, Fab, Zoom, ThemeProvider, createTheme, useTheme, TextField, IconButton
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { keyframes } from '@emotion/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import StrategicApproach from './StrategicApproach';
import Services from './Services';
import Insights from './Insights';
import MainFormPage from './MainFormPage';

export default function App() {
  // Default to light mode for now; keep toggle logic available but hidden from the UI
  const [mode, setMode] = useState(() => localStorage.getItem('colorMode') || 'light');
  const [showScroll, setShowScroll] = useState(false);

  // Persist color mode and listen for system changes if not overridden
  useEffect(() => {
    localStorage.setItem('colorMode', mode);
  }, [mode]);

  // System preference listener removed because app will default/use light mode for now

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#90caf9' : '#1976d2',
      },
      background: {
        default: mode === 'dark' ? '#101624' : '#f4f6fb',
        paper: mode === 'dark' ? '#1a2236' : '#fff',
      },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  // Theme toggle button for menu (not header)
  function ColorModeToggle({ showText = true }) {
    if (showText) {
      // Mobile: Button with icon and text
      return (
        <Button
          onClick={() => {
            setMode(m => {
              const next = m === 'light' ? 'dark' : 'light';
              localStorage.setItem('colorMode', next);
              return next;
            });
          }}
          color="inherit"
          sx={{ minWidth: 0, p: 1, borderRadius: 2, width: '100%', justifyContent: 'flex-start' }}
          aria-label="Toggle light/dark mode"
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        >
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      );
    } else {
      // Desktop: IconButton only
      return (
        <IconButton
          onClick={() => {
            setMode(m => {
              const next = m === 'light' ? 'dark' : 'light';
              localStorage.setItem('colorMode', next);
              return next;
            });
          }}
          color="inherit"
          sx={{ p: 1, borderRadius: 2 }}
          aria-label="Toggle light/dark mode"
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      );
    }
  }

  // Show Back to Top button after scrolling 300px
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Router>
          <Header ColorModeToggle={ColorModeToggle} showColorToggle={false} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: { xs: '84px', md: '84px' } }}>
            <Routes>
              <Route path="/" element={<MainFormPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/strategic-approach" element={<StrategicApproach />} />
              <Route path="/services" element={<Services />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </Box>
          <Footer />
          {/* Back to Top Button */}
          <Zoom in={showScroll}>
            <Fab
              color="primary"
              size="medium"
              aria-label="Back to top"
              onClick={handleBackToTop}
              sx={{
                position: 'fixed',
                bottom: { xs: 24, md: 40 },
                right: { xs: 24, md: 40 },
                zIndex: 1201,
                boxShadow: '0 4px 16px 0 rgba(33,150,243,0.18)',
                transition: 'box-shadow 0.2s',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 rgba(33,150,243,0.28)',
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="large" />
            </Fab>
          </Zoom>
        </Router>
      </Box>
    </ThemeProvider>
  );
} 