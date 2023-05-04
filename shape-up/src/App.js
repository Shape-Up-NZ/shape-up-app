import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Workouts from './pages/Workouts';
import CalorieLog from './pages/CalorieLog';

const App = () => {
  return (
    <Box width='400px' sx={{ width: {x1: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Workouts" element={<Workouts />} />
            <Route path="/pages/CalorieLog" element={<CalorieLog />} />
            
            
        </Routes>
    </Box>
  )
}

export default App