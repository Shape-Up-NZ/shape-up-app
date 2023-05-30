import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import { Container } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (url) => {
    setActiveLink(url);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        gap="40px"
        mt="32px"
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "94px",
              height: "83px",
              margin: "10px 2px 0 0",
            }}
          />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="flex-end"
          display={{ xs: "none", md: "flex" }}
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            style={{
              textDecoration: "none",
              color: activeLink === "/" ? "#FF2625" : "#3A1212",
              borderBottom: activeLink === "/" ? "3px solid #FF2625" : "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/pages/features"
            onClick={() => handleLinkClick("/pages/features")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/features" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/features" ? "3px solid #FF2625" : "none",
            }}
          >
            Features
          </Link>
          <Link
            to="/pages/workouts"
            onClick={() => handleLinkClick("/pages/workouts")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/workouts" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/workouts" ? "3px solid #FF2625" : "none",
            }}
          >
            Workout Planner
          </Link>
          <Link
            to="/pages/calorielog"
            onClick={() => handleLinkClick("/pages/calorielog")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/calorielog" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/calorielog"
                  ? "3px solid #FF2625"
                  : "none",
            }}
          >
            Calorie Log
          </Link>
          <Link
            to="/pages/bmrcalculator"
            onClick={() => handleLinkClick("/pages/bmrcalculator")}
            style={{
              textDecoration: "none",
              color:
                activeLink === "/pages/bmrcalculator" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/bmrcalculator"
                  ? "3px solid #FF2625"
                  : "none",
            }}
          >
            BMR
          </Link>

          <Link
            to="/pages/register"
            onClick={() => handleLinkClick("/pages/register")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/register" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/register" ? "3px solid #FF2625" : "none",
            }}
          >
            Register
          </Link>
          <Link
            to="/pages/login"
            onClick={() => handleLinkClick("/pages/login")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/login" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/login" ? "3px solid #FF2625" : "none",
            }}
          >
            Login
          </Link>
        </Stack>
        <IconButton
          color="inherit"
          onClick={handleMobileMenuToggle}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Stack>
      {isMobileMenuOpen && (
        <Stack
          direction="column"
          alignItems="center"
          pt="20px"
          pb="10px"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            style={{
              textDecoration: "none",
              color: activeLink === "/" ? "#FF2625" : "#3A1212",
              borderBottom: activeLink === "/" ? "3px solid #FF2625" : "none",
              marginBottom: "10px",
            }}
          >
            Home
          </Link>
          <Link
            to="/pages/features"
            onClick={() => handleLinkClick("/pages/features")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/features" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/features" ? "3px solid #FF2625" : "none",
            }}
          >
            Features
          </Link>
          <Link
            to="/pages/workouts"
            onClick={() => handleLinkClick("/pages/workouts")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/workouts" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/workouts" ? "3px solid #FF2625" : "none",
            }}
          >
            Workout Planner
          </Link>
          <Link
            to="/pages/calorielog"
            onClick={() => handleLinkClick("/pages/calorielog")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/calorielog" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/calorielog"
                  ? "3px solid #FF2625"
                  : "none",
            }}
          >
            Calorie Log
          </Link>
          <Link
            to="/pages/bmrcalculator"
            onClick={() => handleLinkClick("/pages/bmrcalculator")}
            style={{
              textDecoration: "none",
              color:
                activeLink === "/pages/bmrcalculator" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/bmrcalculator"
                  ? "3px solid #FF2625"
                  : "none",
            }}
          >
            BMR
          </Link>

          <Link
            to="/pages/register"
            onClick={() => handleLinkClick("/pages/register")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/register" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/register" ? "3px solid #FF2625" : "none",
            }}
          >
            Register
          </Link>
          <Link
            to="/pages/login"
            onClick={() => handleLinkClick("/pages/login")}
            style={{
              textDecoration: "none",
              color: activeLink === "/pages/login" ? "#FF2625" : "#3A1212",
              borderBottom:
                activeLink === "/pages/login" ? "3px solid #FF2625" : "none",
            }}
          >
            Login
          </Link>
        </Stack>
      )}
    </Container>
  );
};

export default Navbar;
