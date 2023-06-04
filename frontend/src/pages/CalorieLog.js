import React, {useState} from 'react';
import { Box } from '@mui/material';

import MealLog from '../components/NutritionLog';


const CalorieLog = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <MealLog />
    </Box>
  )
}

export default CalorieLog