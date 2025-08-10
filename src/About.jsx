import React from 'react';
import { Container, Typography, Paper, Box, Avatar } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
          Meet Ravi Gupta: Architecting Financial Futures with Global Expertise
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Avatar alt="Ravi Gupta" src="static/profile.jpeg" sx={{ width: 120, height: 120 }} />
          <Box>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0 }}>
              Ravi Gupta is a Chartered Accountant with nearly 30 years of diverse finance experience and a Bachelor of Law degree. He holds NISM certifications and has led large-scale finance transformations for global organizations. Ravi combines corporate precision with a deeply personal commitment to empower individuals and families to achieve financial independence.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Mission: To empower individuals and families with trusted, insightful guidance and disciplined strategies, ensuring clarity and informed decision-making to help them achieve their unique life goals and financial independence.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Vision: Our vision is for every client to experience profound financial independence, confidently realizing their unique life goals, guided by our unwavering commitment to clarity, insightful strategies, and disciplined growth.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
          What This Means For Your Financial Plan
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Strategic foresight forged in global finance, precision & process optimization for your wealth, legal and financial acumen, and empathetic client service — all tailored to deliver a clear, disciplined path to your financial independence.
        </Typography>
      </Paper>
    </Container>
  );
} 