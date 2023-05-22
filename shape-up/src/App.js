import React from 'react'
import { Route, Routes,  Navigate} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Workouts from './pages/Workouts';
import Bmrcalculator from './pages/bmrcalculator';
import CalorieLog from './pages/CalorieLog';
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import LandingPage from './components/landingpage';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
    <Box width='400px' sx={{ width: {x1: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Workouts" element={<Workouts />} />
            <Route path="/pages/bmrcalculator" element={<Bmrcalculator />} />
            <Route path="/pages/CalorieLog" element={<CalorieLog />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Box>
    </SignedIn>

    <SignedOut>

      <LandingPage/>

    </SignedOut>

    </ClerkProvider>
  )
}

export default App