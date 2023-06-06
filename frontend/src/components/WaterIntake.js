import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useUpdateWaterIntakeMutation } from "../slices/usersApiSlice";
import { Box } from "@mui/material";

const WaterIntakeLog = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [totalWater, setTotalWater] = useState(0);
  const [loggedWater, setLoggedWater] = useState(0);

  const [updateWaterIntake] = useUpdateWaterIntakeMutation();

  useEffect(() => {
    const fetchWaterIntake = async () => {
      try {
        const response = await fetch(`/api/users/water-intake/${currentDate}`);
        const data = await response.json();

        setTotalWater(data.litersDrank);

        const waterIntakeData = JSON.stringify(data);
        localStorage.setItem("waterIntake", waterIntakeData);
      } catch (error) {
        console.error("Fetch water intake error:", error);
      }
    };

    // Load the water intake from local storage
    const storedWaterIntake = localStorage.getItem("waterIntake");
    if (storedWaterIntake) {
      const parsedWaterIntake = JSON.parse(storedWaterIntake);
      setTotalWater(parsedWaterIntake.litersDrank);
    } else {
      fetchWaterIntake();
    }
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setLoggedWater(parseFloat(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const waterIntakeData = {
        litersDrank: totalWater + loggedWater,
      };

      // Save the water intake to local storage
      localStorage.setItem("waterIntake", JSON.stringify(waterIntakeData));

      const updatedWaterIntake = await updateWaterIntake(
        waterIntakeData
      ).unwrap();

      if (updatedWaterIntake) {
        toast.success("Water intake updated successfully!");
        setTotalWater(updatedWaterIntake.litersDrank);
        setLoggedWater(0);
      }
    } catch (error) {
      toast.error("Failed to save the water intake.");
      console.error("Save water intake error:", error);
    }
  };

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
        <div className="water-intake-log">
          <h2 className="water-intake-log__total">
            Water to be consumed for today: {totalWater} litres
          </h2>
          <Form onSubmit={handleSubmit} className="water-intake-log__form">
            <Form.Label
              className="water-intake-log__label"
              htmlFor="totalWater"
            >
              Log water consumed (in litres):
              <Form.Control
                type="number"
                min="0"
                step="0.05"
                value={loggedWater}
                onChange={handleChange}
                className="water-intake-log__input"
              />
            </Form.Label>
            <Button type="submit" className="water-intake-log__button mx-2">
              Add
            </Button>
          </Form>
        </div>
      </Box>
    </>
  );
};

export default WaterIntakeLog;
