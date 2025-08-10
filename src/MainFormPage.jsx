import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Typography, Paper, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, CssBaseline, TextField
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const questions = [
  { label: 'Number of Dependents', options: [ { label: 'More than 3', value: 1 }, { label: '3', value: 2 }, { label: '2', value: 3 }, { label: '1', value: 4 }, { label: 'None', value: 5 }, ], },
  { label: 'EMI as Percentage of Monthly Income', options: [ { label: 'More than 50%', value: 1 }, { label: '25% to 50%', value: 2 }, { label: '10% to 25%', value: 3 }, { label: 'Less than 10%', value: 4 }, { label: 'None', value: 5 }, ], },
  { label: 'Knowledge of Investment Products', options: [ { label: 'Unaware – Do Not Understand at All', value: 1 }, { label: 'Aware of Basic Concepts', value: 2 }, { label: 'Beginner – Rely on Advice', value: 3 }, { label: 'Proficient – Invest Independently', value: 4 }, { label: 'Expert – Actively Trade in Markets', value: 5 }, ], },
  { label: 'Equity as Percentage of Total Investments', options: [ { label: 'None', value: 1 }, { label: 'Less than 20%', value: 2 }, { label: '20% to 40%', value: 3 }, { label: 'Approximately 50%', value: 4 }, { label: 'More than 50%', value: 5 }, ], },
  { label: 'Job Preference: Stability vs. Growth Opportunity', options: [ { label: 'Definitely Prefer Stability', value: 1 }, { label: 'Somewhat Prefer Stability', value: 2 }, { label: 'No Strong Preference', value: 3 }, { label: 'Somewhat Prefer Growth', value: 4 }, { label: 'Definitely Prefer Growth', value: 5 }, ], },
  { label: 'If your portfolio dropped by more than 20% due to a market correction, what would you do?', options: [ { label: 'Sell All Investments Immediately', value: 1 }, { label: 'Switch to Lower Risk Portfolio', value: 2 }, { label: 'Gradually Shift to Lower Risk', value: 3 }, { label: 'Stay Invested', value: 4 }, { label: 'Invest More', value: 5 }, ], },
  { label: 'Annual Income', options: [ { label: 'Less than ₹5 lakh', value: 1 }, { label: '₹5–25 lakh', value: 2 }, { label: '₹25–50 lakh', value: 3 }, { label: '₹50 lakh–1 crore', value: 4 }, { label: 'More than ₹1 crore', value: 5 }, ], },
  { label: 'Security of Current and Future Income', options: [ { label: 'Not Secure', value: 1 }, { label: 'Somewhat Insecure', value: 2 }, { label: 'Uncertain', value: 3 }, { label: 'Somewhat Secure', value: 4 }, { label: 'Very Secure', value: 5 }, ], },
  { label: 'Investment Mindset', options: [ { label: 'Not Comfortable with Any Loss', value: 1 }, { label: 'Comfortable with 8% Loss for 20% Gain', value: 3 }, { label: 'Comfortable with 25% Loss for 50% Gain', value: 5 }, ], },
  { label: 'Age Group', options: [ { label: 'Over 65 Years', value: 1 }, { label: '50 to 65 Years', value: 2 }, { label: '26 to 50 Years', value: 3 }, { label: '25 to 30 Years', value: 4 }, { label: 'Under 25 Years', value: 5 }, ], },
  { label: 'Portfolio Size as Percentage of Annual Income', options: [ { label: 'Over 60%', value: 1 }, { label: '30% to 50%', value: 2 }, { label: 'Less than 30%', value: 3 }, ], },
];

const riskProfiles = [
  { min: 1, max: 1.4, label: 'Very Conservative', desc: 'Safety First: Ok with lower returns provided outcome in investments are conserved', equity: '<15% Equity' },
  { min: 1.5, max: 2.4, label: 'Conservative', desc: 'Slow and steady wins the race: Stable portfolio with stable returns. You are ok with minimal losses in favour of more stable means', equity: '15% to 30% Equity' },
  { min: 2.5, max: 3.4, label: 'Moderate', desc: 'Balance risk and returns, keeping in right in the middle with some assets in high risk and rest in low risk', equity: '30% to 50% Equity' },
  { min: 3.5, max: 4.4, label: 'Aggressive', desc: 'Returns Matter: Ready for high market fluctuations and keen for long term. Ready for risk with proven track record and higher than benchmark returns', equity: '50% to 60% Equity' },
  { min: 4.5, max: 5, label: 'Very Aggressive', desc: 'No risk no return: Market downturn as an opportunity to take risk. Ok with short term losses as long as you can recoup it within short term.', equity: '60% to 75% Equity' },
];

function getRiskProfile(avgScore) {
  return riskProfiles.find(rp => avgScore >= rp.min && avgScore <= rp.max);
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: none; }
`;
const bounceIn = keyframes`
  0% { opacity: 0; transform: scale(0.95) translateY(32px); }
  60% { opacity: 1; transform: scale(1.03) translateY(-8px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
`;

function HeroSection({ onStart }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box sx={{ position: 'relative', mb: 8 }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: isDark ? 'linear-gradient(135deg, #0a0f1c 0%, #1a2236 50%, #2c3e50 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' }} />
        <Box sx={{ position: 'absolute', top: '10%', right: '15%', width: 120, height: 120, borderRadius: '50%', background: isDark ? 'linear-gradient(45deg, rgba(33,150,243,0.1), rgba(33,203,243,0.1))' : 'linear-gradient(45deg, rgba(33,150,243,0.08), rgba(33,203,243,0.08))', filter: 'blur(40px)' }} />
        <Box sx={{ position: 'absolute', bottom: '20%', left: '10%', width: 80, height: 80, borderRadius: '50%', background: isDark ? 'linear-gradient(45deg, rgba(156,39,176,0.1), rgba(233,30,99,0.1))' : 'linear-gradient(45deg, rgba(156,39,176,0.08), rgba(233,30,99,0.08))', filter: 'blur(30px)' }} />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? '1e293b' : 'e2e8f0'}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, opacity: 0.3 }} />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // Override global .MuiContainer-root width for the hero only so it spans wider
          width: '92% !important',
          maxWidth: 'none !important',
          px: { xs: 2, md: 3 },
        }}
      >
            <Box sx={{ width: '92%', maxWidth: 1400, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: { xs: 4, lg: 8 }, pt: { xs: 6, md: 10 }, pb: { xs: 3, md: 6 }, textAlign: { xs: 'center', lg: 'left' }, mx: 'auto' }}>
          <Box sx={{ flex: '0 0 60%', maxWidth: { xs: '100%', lg: '60%' } }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, mb: 3, background: isDark ? 'linear-gradient(90deg, rgba(33,150,243,0.2), rgba(33,203,243,0.2))' : 'linear-gradient(90deg, rgba(33,150,243,0.1), rgba(33,203,243,0.1))', borderRadius: 3, border: `1px solid ${isDark ? 'rgba(33,150,243,0.3)' : 'rgba(33,150,243,0.2)'}` }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(90deg, #2196f3, #21cbf3)', animation: 'pulse 2s infinite' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: isDark ? '#90caf9' : '#1976d2', textTransform: 'uppercase', letterSpacing: 1 }}>SEBI Registered Investment Adviser</Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' }, lineHeight: 1.1, mb: 3, background: isDark ? 'linear-gradient(135deg, #ffffff 0%, #90caf9 100%)' : 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>Transforming Your Personal Finances with Strategic Precision</Typography>
            <Typography variant="h5" sx={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(30,41,59,0.8)', mb: 2, fontWeight: 400, lineHeight: 1.4, maxWidth: '100%', mx: { xs: 'auto', lg: 0 } }}>Empowering Your Journey to Financial Independence and Confidently Realizing Your Life's Most Important Goals.</Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(30,41,59,0.7)', mb: 4, maxWidth: '100%', mx: { xs: 'auto', lg: 0 } }}>&quot;Beyond managing wealth, we engineer your financial future.&quot; — Ravi Gupta</Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: 700, borderRadius: 3, background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)', boxShadow: '0 8px 32px rgba(33, 150, 243, 0.3)', '&:hover': { background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)', boxShadow: '0 12px 40px rgba(33, 150, 243, 0.4)', transform: 'translateY(-2px)' }, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={onStart}>Start Assessment</Button>
              <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: 600, borderRadius: 3, borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(30,41,59,0.3)', color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(30,41,59,0.9)', '&:hover': { borderColor: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,41,59,0.6)', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(30,41,59,0.05)' }, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={() => { window.location.hash = '#/contact'; }}>Schedule Your Strategic Discovery Session</Button>
            </Box>
            {/* Tagline moved below the two-column layout so it doesn't wrap inside the left column */}
          </Box>
          <Box sx={{ flex: '0 0 35%', display: 'flex', justifyContent: 'center', maxWidth: { xs: '100%', lg: '35%' }, overflow: 'hidden' }}>
            <Box sx={{ position: 'relative', width: { xs: '280px', sm: '320px', md: '400px' }, height: { xs: '280px', sm: '320px', md: '400px' }, maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: isDark ? 'linear-gradient(135deg, rgba(33,150,243,0.1), rgba(33,203,243,0.1))' : 'linear-gradient(135deg, rgba(33,150,243,0.08), rgba(33,203,243,0.08))', borderRadius: '50%', border: `2px solid ${isDark ? 'rgba(33,150,243,0.2)' : 'rgba(33,150,243,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'end', gap: 1, height: '60%' }}>
                  {[40, 60, 80, 65, 90, 75].map((height, i) => (<Box key={i} sx={{ width: 8, height: `${height}%`, background: `linear-gradient(180deg, #2196f3 ${100-height}%, #21cbf3 100%)`, borderRadius: '4px 4px 0 0', animation: `growUp 1s ease-out ${i * 0.1}s both` }} />))}
                </Box>
              </Box>
              {/* <Box sx={{ position: 'absolute', top: '15%', right: '10%', width: 24, height: 24, background: 'linear-gradient(135deg, #10b981, #34d399)', borderRadius: '50%', animation: 'float 3s ease-in-out infinite' }} />
              <Box sx={{ position: 'absolute', bottom: '20%', left: '15%', width: 20, height: 20, background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', borderRadius: '50%', animation: 'float 3s ease-in-out infinite reverse' }} /> */}
              <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2196f3" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#21cbf3" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* <path d="M 80,120 Q 200,80 320,120 Q 200,160 80,200 Q 200,240 320,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.6" /> */}
              </svg>
            </Box>
          </Box>
        </Box>

        {/* Full-width tagline below the two-column hero so it doesn't inherit column constraints */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '92%', maxWidth: 1400 }}>
            <Box sx={{ display: 'flex', gap: 2, mt: 0, mb: 4, justifyContent: { xs: 'center', lg: 'flex-start' }, opacity: 0.98, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}>
              {[
                'Trusted Strategic Guidance',
                'Personalized Financial Architecture',
                'Disciplined & Resilient Growth'
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: { xs: 0, sm: 1 }, minWidth: 0, flexShrink: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(30,41,59,0.9)', fontSize: { xs: '0.98rem', sm: '1rem' }, textAlign: { xs: 'center', sm: 'left' }, letterSpacing: '0.01em', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal', flex: '1 1 auto' }}>{item}</Typography>
                  {idx < 2 && (
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center', mx: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #2196f3, #21cbf3)', boxShadow: '0 4px 12px rgba(33,150,243,0.12)' }} />
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* The rest of the page (form/results) is rendered by MainFormPage below */}
    </Box>
  );
}

export default function MainFormPage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [userErrors, setUserErrors] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const theme = useTheme();

  const handleChange = (idx, value) => {
    setAnswers(a => { const copy = [...a]; copy[idx] = value; return copy; });
  };

  const handleUserInfoChange = (field, value) => {
    setUserInfo(info => ({ ...info, [field]: value }));
    setUserErrors(errors => ({ ...errors, [field]: '' }));
  };

  const totalScore = answers.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
  const avgScore = answers.filter(Boolean).length ? totalScore / answers.filter(Boolean).length : 0;
  const profile = getRiskProfile(avgScore);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!userInfo.name.trim()) errors.name = 'Name is required';
    if (!userInfo.email.trim()) errors.email = 'Email is required';
    setUserErrors(errors);
    if (Object.keys(errors).length > 0) return;
    const submission = { timestamp: new Date().toISOString(), ...userInfo, answers, score: avgScore, profile: profile?.label || '' };
    const prev = JSON.parse(localStorage.getItem('fire_submissions') || '[]');
    localStorage.setItem('fire_submissions', JSON.stringify([...prev, submission]));
    setSubmitted(true);
  };

  const handleDownloadCSV = () => {
    const data = JSON.parse(localStorage.getItem('fire_submissions') || '[]');
    if (!data.length) return;
    const headers = [ 'Timestamp', 'Name', 'Email', 'Phone', ...questions.map((q, i) => `Q${i + 1}`), 'Score', 'Profile' ];
    const rows = data.map(d => [ d.timestamp, d.name, d.email, d.phone, ...(d.answers || []), d.score, d.profile ]);
    const csv = [headers, ...rows].map(r => r.map(x => `"${(x ?? '').toString().replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'fire_submissions.csv'; a.click(); URL.revokeObjectURL(url);
  };

  const handleStartAssessment = () => {
    setShowForm(true);
    setTimeout(() => { if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 0);
  };

  useEffect(() => {
    try { if (localStorage.getItem('openAssessment')) { localStorage.removeItem('openAssessment'); setShowForm(true); setTimeout(() => { if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 0); } } catch (e) {}
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', pb: 6, overflowX: 'hidden' }}>
      <HeroSection onStart={handleStartAssessment} />
      <Container maxWidth={false} sx={{ py: { xs: 2, md: 6 }, px: { xs: 2, sm: 3, md: 6 } }}>
        {showForm ? (
          <Box sx={{ background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', borderRadius: { xs: 3, md: 8 }, boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(33, 150, 243, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(33, 150, 243, 0.04)', px: { xs: 3, sm: 4, md: 8 }, py: { xs: 4, sm: 5, md: 8 }, mt: { xs: 3, md: 8 }, mb: { xs: 3, md: 8 }, position: 'relative', overflow: 'hidden' }}>
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4, md: 6 }, mb: 5, borderRadius: { xs: 3, md: 6 } }} ref={formRef}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, color: theme.palette.primary.main, mb: 2 }}>Risk Profile Assessment</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, opacity: 0.8 }}>Complete the assessment to receive your personalized investment strategy</Typography>
              </Box>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: 5, p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ gridColumn: '1 / -1', mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>Personal Information</Typography>
                  <TextField label="Full Name" value={userInfo.name} onChange={e => handleUserInfoChange('name', e.target.value)} required error={!!userErrors.name} helperText={userErrors.name} fullWidth />
                  <TextField label="Email Address" value={userInfo.email} onChange={e => handleUserInfoChange('email', e.target.value)} required error={!!userErrors.email} helperText={userErrors.email} type="email" fullWidth />
                  <TextField label="Phone Number (Optional)" value={userInfo.phone} onChange={e => handleUserInfoChange('phone', e.target.value)} fullWidth />
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600, textAlign: 'center' }}>Assessment Questions</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {questions.map((q, i) => (
                      <Box key={q.label} sx={{ p: 3, borderRadius: 3 }}>
                        <FormControl component="fieldset" sx={{ width: '100%' }}>
                          <FormLabel component="legend" sx={{ fontWeight: 600, mb: 2 }}>{q.label}</FormLabel>
                          <RadioGroup value={answers[i]} onChange={e => handleChange(i, e.target.value)}>
                            {q.options.map(opt => (
                              <FormControlLabel key={opt.label} value={opt.value.toString()} control={<Radio />} label={opt.label} />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'center' }}><Button type="submit" variant="contained" color="primary" size="large">Get My Risk Profile</Button></Box>
              </form>
            </Paper>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}


