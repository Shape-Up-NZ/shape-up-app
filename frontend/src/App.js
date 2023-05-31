import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Features from "./pages/Features";
import Workouts from "./pages/Workouts";
import Bmrcalculator from "./pages/bmrcalculator";
import CalorieLog from "./pages/CalorieLog";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Container>
      <ToastContainer />
      <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/features" element={<Features />} />
          <Route path="/pages/workouts" element={<Workouts />} />
          <Route path="/pages/bmrcalculator" element={<Bmrcalculator />} />
          <Route path="/pages/calorieLog" element={<CalorieLog />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/login" element={<Login />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;