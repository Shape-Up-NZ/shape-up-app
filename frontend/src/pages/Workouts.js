import React, {useState} from 'react';
import { Box } from '@mui/material';

import ExercisePage from '../components/ExerciseDB';


const Workouts = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <ExercisePage />
    </Box>
  )
}

export default Workouts