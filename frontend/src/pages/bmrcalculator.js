import React from "react";
import { Box, Typography } from "@mui/material";

import CalorieCalculator from "../components/CalorieCalculator";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const Bmrcalculator = () => {
  return (
    <FormContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "60vh",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          BMR Calculator
        </Typography>
        <CalorieCalculator />
      </Box>
    </FormContainer>
  );
};

export default Bmrcalculator;
