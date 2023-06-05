import React, {useState} from 'react';
import { Box } from '@mui/material';

import WorkoutPlan from '../components/WorkoutPlan';
import ExercisePage from '../components/ExercisePage';
import SearchExercises from '../components/WorkoutSearch';


const Workouts = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <ExercisePage />
    </Box>
  )
}

export default Workouts