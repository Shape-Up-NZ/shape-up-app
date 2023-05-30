import React, {useState} from 'react';
import { Box } from '@mui/material';

import WorkoutPlan from '../components/WorkoutPlan';


const Workouts = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <WorkoutPlan />
    </Box>
  )
}

export default Workouts