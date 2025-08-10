import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SchoolIcon from '@mui/icons-material/School';

export default function StrategicApproach() {
  const steps = [
    { title: 'Discovery & Blueprinting', desc: 'In-depth exploration of your life goals, financial landscape and risk capability to design your personalized financial blueprint.', icon: SearchIcon },
    { title: 'Insightful Strategy Development', desc: 'Crafting a comprehensive, forward-thinking plan tailored to your unique situation.', icon: LightbulbIcon },
    { title: 'Disciplined Execution & Implementation', desc: 'Guided implementation ensuring every action aligns with long-term objectives.', icon: CheckCircleIcon },
    { title: 'Continuous Optimization & Review', desc: 'Ongoing monitoring and performance review to adapt strategies as life and markets change.', icon: AutorenewIcon },
    { title: 'Empowering Informed Decisions', desc: 'Clear communication and education to help you make confident financial decisions.', icon: SchoolIcon },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
          Our Strategic Approach
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          We apply rigorous, strategic frameworks to help you optimize and grow your personal wealth. Our approach is a disciplined journey designed to bring clarity, insight, and sustained growth to your financial life.
        </Typography>

        <Grid container spacing={3}>
          {steps.map((s, i) => (
            <Grid item xs={12} md={6} key={s.title} sx={{ display: 'flex' }}>
              <Paper elevation={1} sx={{
                p: 2.5,
                display: 'flex',
                gap: 2,
                alignItems: 'stretch',
                borderRadius: 2,
                transition: 'transform .18s ease, box-shadow .18s ease',
                ':hover': { transform: 'translateY(-6px)', boxShadow: 3 },
                flex: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* icon container */}
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
                    {(() => {
                      const Icon = s.icon;
                      return <Icon sx={{ fontSize: 28 }} />;
                    })()}
                  </Box>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.05 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {s.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
