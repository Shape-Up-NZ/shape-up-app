import React, {useState} from 'react';
import { Box } from '@mui/material';

import NutritionCheckerForm from '../components/NutritionCheckerForm';


const NutritionChecker = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <NutritionCheckerForm />
    </Box>
  )
}

export default NutritionChecker