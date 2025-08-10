import React from 'react';
import { Container, Typography, Paper, Box, Link, Button } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
          Connect with Us: Your First Step Towards Strategic Financial Independence
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
          We invite you to begin a conversation about your financial future. Reach out to schedule your personalized discovery session.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Phone:</strong> <Link href="tel:+919999044287">+91 99990 44287</Link>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Email:</strong> <Link href="mailto:Ravi@aarschambers.com">Ravi@aarschambers.com</Link>
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" sx={{ mr: 2 }} onClick={() => { try { localStorage.setItem('openAssessment', '1'); } catch (e) {} window.location.hash = '#/'; }}>Start Assessment</Button>
          <Button variant="outlined" href="mailto:Ravi@aarschambers.com">Schedule Discovery Session</Button>
        </Box>
      </Paper>
    </Container>
  );
} 