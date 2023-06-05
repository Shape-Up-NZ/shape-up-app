import React from "react";
import { Box } from "@mui/material";

import NutritionCheckerForm from "../components/NutritionCheckerForm";
import Footer from "../components/Footer";

const NutritionChecker = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <NutritionCheckerForm />
      </Box>
      <Footer />
    </>
  );
};

export default NutritionChecker;
