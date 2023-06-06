import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '10px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: { lg: 'row', xs: 'column' }, // Change flex direction for responsiveness
      }}
      position="relative"
      p="20px"
    >
      <Box flex="1">
        <Typography color="FF2625" fontWeight="600" fontSize={{ lg: '26px', xs: '22px' }}> {/* Adjust font size based on breakpoints */}
          Shape Up
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '32px' } }}>
          We are here to help <br /> you to achieve your <br /> fitness dreams.
        </Typography>
        <Button variant="contained" color="success" component={Link}
  to="../pages/features">
          What we offer
        </Button>
      </Box>
      <Box flex="1">
        <img
          src={HeroBannerImage}
          alt="banner"
          className="img-fluid"
          style={{ maxWidth: '100%' }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
