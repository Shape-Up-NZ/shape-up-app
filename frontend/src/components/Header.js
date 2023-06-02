import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("Logout Successfully!");
    } catch (err) {
      console.error(err);
    }
  };

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
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "94px",
              height: "83px",
              margin: "10px 2px 0 0",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleLinkClick("/")}
              style={{
                textDecoration: "none",
                color: activeLink === "/" ? "#FF2625" : "#3A1212",
                borderBottom: activeLink === "/" ? "3px solid #FF2625" : "none",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pages/features"
              onClick={() => handleLinkClick("/pages/features")}
              style={{
                textDecoration: "none",
                color: activeLink === "/pages/features" ? "#FF2625" : "#3A1212",
                borderBottom:
                  activeLink === "/pages/features"
                    ? "3px solid #FF2625"
                    : "none",
              }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pages/workouts"
              onClick={() => handleLinkClick("/pages/workouts")}
              style={{
                textDecoration: "none",
                color: activeLink === "/pages/workouts" ? "#FF2625" : "#3A1212",
                borderBottom:
                  activeLink === "/pages/workouts"
                    ? "3px solid #FF2625"
                    : "none",
              }}
            >
              Workout Planner
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pages/nutrition-checker"
              onClick={() => handleLinkClick("/pages/nutrition-checker")}
              style={{
                textDecoration: "none",
                color:
                  activeLink === "/pages/nutrition-checker" ? "#FF2625" : "#3A1212",
                borderBottom:
                  activeLink === "/pages/nutrition-checker"
                    ? "3px solid #FF2625"
                    : "none",
              }}
            >
              Nutrition Checker
            </Nav.Link>
            <Nav.Link
              as={Link}
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
            </Nav.Link>
          </Nav>
          <Nav>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item as={Link} to="/pages/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/pages/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/pages/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
