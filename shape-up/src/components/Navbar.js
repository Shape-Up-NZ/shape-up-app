import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mui/system';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (url) => {
    setActiveLink(url);
  };

  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: '48px', height: '48px', margin: '0px 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fonrSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" onClick={() => handleLinkClick('/')} style={{textDecoration: 'none', color: activeLink === '/' ? "#FF2625" : "#3A1212", borderBottom: activeLink === '/' ? '3px solid #FF2625' : 'none'}}>Home</Link>
        <Link to="/features" onClick={() => handleLinkClick('/features')} style={{textDecoration: 'none', color: activeLink === '/features' ? "#FF2625" : "#3A1212", borderBottom: activeLink === '/features' ? '3px solid #FF2625' : 'none'}}>Features</Link>
        <Link to="/pages/workouts" onClick={() => handleLinkClick('/pages/workouts')} style={{textDecoration: 'none', color: activeLink === '/pages/workouts' ? "#FF2625" : "#3A1212", borderBottom: activeLink === '/pages/workouts' ? '3px solid #FF2625' : 'none'}}>Workout Planner</Link>
        <Link to="/calorielog" onClick={() => handleLinkClick('/calorielog')} style={{textDecoration: 'none', color: activeLink === '/calorielog' ? "#FF2625" : "#3A1212", borderBottom: activeLink === '/calorielog' ? '3px solid #FF2625' : 'none'}}>Calorie Log</Link>
        <Link to="/pages/bmrcalculator" onClick={() => handleLinkClick('/pages/bmrcalculator')} style={{textDecoration: 'none', color: activeLink === '/pages/bmrcalculator' ? "#FF2625" : "#3A1212", borderBottom: activeLink === '/pages/bmrcalculator' ? '3px solid #FF2625' : 'none'}}>BMR</Link>

      </Stack>
    </Stack>
  )
}

export default Navbar