import React, {useState} from 'react';
import { Box } from '@mui/material';

import WaterIntakeLog from '../components/WaterIntakeLog';


const WaterIntake = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <WaterIntakeLog />
    </Box>
  )
}

export default WaterIntake