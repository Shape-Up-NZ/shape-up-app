import React from 'react';
import { Box, Typography } from '@mui/material';

import CalorieCalculator from '../components/CalorieCalculator';

const Bmrcalculator = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>BMR Calculator</Typography>
      <CalorieCalculator />
    </Box>
  )
}

export default Bmrcalculator
