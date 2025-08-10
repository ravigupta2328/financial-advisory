import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 3, textAlign: 'center', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Aars Chambers. All rights reserved.
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
        SEBI Registered Investment Adviser
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
        Phone: <Link href="tel:+919999044287">+91 99990 44287</Link> • Email: <Link href="mailto:Ravi@aarschambers.com">Ravi@aarschambers.com</Link>
      </Typography>
    </Box>
  );
} 