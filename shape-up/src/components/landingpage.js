import React, { useState } from "react";
import './landingpage.css';
import BgVideo from '../assets/videos/gymvid1.mp4';
import Logo from '../assets/images/Logo.png';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


const LandingPage = ({ onButtonClick }) => {

    const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    navigate('/pages/LoginPage');
  };

  if (buttonClicked) {
    return null; // Render nothing if the button is clicked
  }

    return (
        <div className='landingpage'>
        <video className='landingpage__video' autoPlay loop muted>
            <source src={BgVideo} type='video/mp4' />
        </video>
        <div className="overlay"></div>
        <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo' />
        <h1 className="text">We are here to help <br /> you to achieve your <br /> fitness dreams.</h1>
        <button className='cta-button' onClick={handleButtonClick}>Start/Continue your Journey</button>
      </div>
        <div className='landingpage__content'>
        </div>
        </div>
    );
}

export default LandingPage;