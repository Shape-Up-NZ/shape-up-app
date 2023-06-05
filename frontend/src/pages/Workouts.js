import React from "react";
import { Box } from "@mui/material";

import ExercisePage from "../components/ExerciseDB";
import Footer from "../components/Footer";

const Workouts = () => {
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
        <ExercisePage />
      </Box>
      <Footer />
    </>
  );
};

export default Workouts;
