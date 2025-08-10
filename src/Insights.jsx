import React from 'react';
import { Container, Paper, Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const options = [
  { name: 'Option A: Conservative', equity: '10% (Nifty 50)', gold: '10%', debt: '80%', return: '7.89%' },
  { name: 'Option B: Moderate Conservative', equity: '25% (Nifty 50)', gold: '10%', debt: '65%', return: '8.51%' },
  { name: 'Option C: Balanced', equity: '50% (Flexi-cap Avg)', gold: '10%', debt: '40%', return: '11.88%' },
  { name: 'Option D: Moderate Growth', equity: '70% (Nifty 500 + 2% alpha)', gold: '10%', debt: '20%', return: '12.52%' },
  { name: 'Option E: Aggressive Growth', equity: '90% (Nifty 500 + 2% alpha)', gold: '0%', debt: '10%', return: '13.68%' },
];

export default function Insights() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
          Insights & Resources: Empowering Your Financial Intelligence
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Our commitment to clarity extends to empowering you with knowledge. Explore curated insights and resources designed to deepen your financial understanding and enhance your decision-making.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
            Understand Your Current Returns: The Power of Historical Performance
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Use the illustrative table below to see how different asset allocations could have translated into approximate annualized returns over the last 10 years (illustrative averages).
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Allocation</TableCell>
                  <TableCell>Equity</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>Debt</TableCell>
                  <TableCell>Estimated Annualized Return</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {options.map(opt => (
                  <TableRow key={opt.name}>
                    <TableCell>{opt.name}</TableCell>
                    <TableCell>{opt.equity}</TableCell>
                    <TableCell>{opt.gold}</TableCell>
                    <TableCell>{opt.debt}</TableCell>
                    <TableCell>{opt.return}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom>
            Underlying Historical Averages (Illustrative)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Equity (Nifty 50): ~11.3% p.a. • Flexi-cap avg: ~16.0% p.a. • Nifty 500 + 2% alpha: ~14.4% p.a. • Gold: ~10.0% p.a. • Debt (liquid avg): ~7.2% p.a.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
            Key Takeaway
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Asset allocation is a primary driver of long-term returns. Small differences in annualized returns compound into materially different outcomes over time. This table is illustrative only and not investment advice.
          </Typography>

          {/* Placeholder for interactive form/calculator - to be implemented later */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={() => { alert('Form coming soon — will be implemented later.'); }}>
              Open Calculator (Placeholder)
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}


