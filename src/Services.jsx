import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';

export default function Services() {
  const services = [
    { title: 'Comprehensive Financial Architecture', desc: 'Thorough analysis and personalized Financial Independence Roadmap.', icon: AccountBalanceIcon },
    { title: 'Strategic Investment Management', desc: 'Risk profiling, portfolio construction and continuous monitoring.', icon: TrendingUpIcon },
    { title: 'Risk Mitigation & Protection', desc: 'Insurance planning and protections for unforeseen events.', icon: ShieldIcon },
    { title: 'Life Stage & Legacy Planning', desc: 'Retirement design and estate planning strategies.', icon: EventNoteIcon },
    { title: 'Specialized Expertise & Advanced Strategies', desc: 'Tax planning, GIFT City advisory and cross-border opportunities.', icon: AttachMoneyIcon },
    { title: 'Financial Education & Masterclasses', desc: 'Behavioural finance and Financial Freedom masterclasses.', icon: SchoolIcon },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
          Tailored Financial Solutions: Strategic Pathways to Your Independence
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map(s => (
            <Grid item xs={12} md={6} key={s.title} sx={{ display: 'flex' }}>
              <Paper elevation={1} sx={{
                p: 2,
                borderRadius: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'stretch',
                flex: 1,
                transition: 'transform .18s ease, box-shadow .18s ease',
                ':hover': { transform: 'translateY(-6px)', boxShadow: 3 }
              }}>
                <Box sx={{
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  width: 56,
                  height: 56,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(33,203,243,0.12)'
                }}>
                  {(() => { const Icon = s.icon; return <Icon sx={{ fontSize: 28 }} /> })()}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={700} color="text.primary">{s.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{s.desc}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
