import React, { useState } from "react";
import { Box } from "@mui/material";

import WaterIntakeLog from "../components/WaterIntakeLog";
import Footer from "../components/Footer";

const WaterIntake = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <WaterIntakeLog />
      </Box>
      <Footer />
    </>
  );
};

export default WaterIntake;
