import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Box, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <SignIn />
    </Box>
  );
};

export default LoginPage;