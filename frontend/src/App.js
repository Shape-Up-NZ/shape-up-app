import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Workouts from './pages/Workouts';
import Bmrcalculator from './pages/bmrcalculator';
import CalorieLog from './pages/CalorieLog';
import Login from './pages/Login'

const App = () => {
  return (
    <Box width='400px' sx={{ width: {x1: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Workouts" element={<Workouts />} />
            <Route path="/pages/bmrcalculator" element={<Bmrcalculator />} />
            <Route path="/pages/CalorieLog" element={<CalorieLog />} />
            <Route path="/pages/Login" element={<Login />} />
        </Routes>
    </Box>
  )
}

export default App