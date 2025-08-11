import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, useTheme, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ ColorModeToggle, children, showColorToggle = true }) {
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Strategic Approach', to: '/strategic-approach' },
    { label: 'Our Services', to: '/services' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
  ];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

  // Shadow/blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        background: scrolled
          ? theme.palette.mode === 'dark'
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : theme.palette.background.paper,
        borderBottom: scrolled
          ? `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(30,41,59,0.1)'}`
          : 'none',
        boxShadow: scrolled
          ? theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(33, 150, 243, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(33, 150, 243, 0.05)'
          : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        zIndex: 1202,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Toolbar sx={{ minHeight: 84, px: { xs: 2, md: 6 }, position: 'relative' }}>
        {/* Mobile: Hamburger menu on the left */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', mr: 1 }}>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={() => setDrawerOpen(open => !open)}
            sx={{ 
              mr: 1,
              p: 1.5,
              borderRadius: 2,
              '&:hover': {
                background: theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'rgba(30,41,59,0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ 
              sx: { 
                minWidth: 280, 
                zIndex: 1300,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRight: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255,255,255,0.1)'
                  : 'rgba(30,41,59,0.1)',
              } 
            }}
          >
            <List sx={{ mt: '84px', px: 2 }}>
              {navLinks.map(link => (
                <ListItem key={link.to} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={Link}
                    to={link.to}
                    selected={location.pathname === link.to}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      borderRadius: 2,
                      background: location.pathname === link.to
                        ? theme.palette.mode === 'dark'
                          ? 'rgba(33,150,243,0.15)'
                          : 'rgba(33,150,243,0.1)'
                        : 'transparent',
                      '&:hover': {
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(30,41,59,0.05)',
                      },
                      '&.Mui-selected': {
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(33,150,243,0.2)'
                          : 'rgba(33,150,243,0.15)',
                        '&:hover': {
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(33,150,243,0.25)'
                            : 'rgba(33,150,243,0.2)',
                        },
                      },
                    }}
                  >
                    <ListItemText 
                      primary={link.label} 
                      sx={{
                        '& .MuiTypography-root': {
                          fontWeight: location.pathname === link.to ? 600 : 500,
                          color: location.pathname === link.to 
                            ? theme.palette.primary.main 
                            : theme.palette.text.primary,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              {/* Theme toggle in menu (mobile only) */}
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ColorModeToggle showText={true} />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        
        {/* App Title: Centered on mobile, left on desktop */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            flexGrow: { xs: 1, md: 0 },
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: theme.palette.text.primary,
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '2rem' },
            transition: 'all 0.2s ease',
            textAlign: { xs: 'center', md: 'left' },
            position: { xs: 'absolute', md: 'static' },
            left: { xs: 0, md: 'auto' },
            right: { xs: 0, md: 'auto' },
            margin: { xs: 'auto', md: 0 },
            pointerEvents: { xs: 'auto', md: 'auto' },
            zIndex: { xs: 1, md: 'auto' },
            textDecoration: 'none',
          }}
        >
          <Box component="img" src={`${import.meta.env.BASE_URL}static/logo.png`} alt="Aars Chambers" sx={{ height: { xs: 32, sm: 36, md: 48 }, objectFit: 'contain' }} />
        </Box>
        
        {/* Desktop: Nav links on right */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                color="inherit"
                disableRipple
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  letterSpacing: 0.5,
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  position: 'relative',
                  color: active ? theme.palette.primary.main : theme.palette.text.primary,
                  background: active 
                    ? theme.palette.mode === 'dark'
                      ? 'rgba(33,150,243,0.15)'
                      : 'rgba(33,150,243,0.1)'
                    : 'transparent',
                  border: active
                    ? `1px solid ${theme.palette.mode === 'dark' ? 'rgba(33,150,243,0.3)' : 'rgba(33,150,243,0.2)'}`
                    : '1px solid transparent',
                  boxShadow: active 
                    ? theme.palette.mode === 'dark'
                      ? '0 4px 12px rgba(33,150,243,0.15)'
                      : '0 4px 12px rgba(33,150,243,0.1)'
                    : 'none',
                  '&:hover': {
                    background: active
                      ? theme.palette.mode === 'dark'
                        ? 'rgba(33,150,243,0.2)'
                        : 'rgba(33,150,243,0.15)'
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.05)'
                        : 'rgba(30,41,59,0.05)',
                    color: theme.palette.primary.main,
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {link.label}
              </Button>
            );
          })}
          
          {/* Schedule Discovery Session Button */}
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="medium"
            sx={{
              ml: 2,
              px: 3,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
              boxShadow: '0 4px 16px rgba(33, 150, 243, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
                boxShadow: '0 8px 24px rgba(33, 150, 243, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Schedule Discovery Session
          </Button>
        </Box>
        
        {/* Desktop: Theme toggle on far right (hidden when showColorToggle is false) */}
        {showColorToggle ? (
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 2 }}>
            <ColorModeToggle showText={false} />
          </Box>
        ) : null}
        
        {/* Right content (e.g., theme toggle) */}
        {children}
      </Toolbar>
    </AppBar>
  );
} 