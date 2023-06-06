import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CalorieTypeForm() {
  const [Breakfast, setBreakfast] = useState(true);
  const [Lunch, setLunch] = useState(true);
  const [Dinner, setDinner] = useState(true);
  const [Snack, setSnack] = useState(true);

  const handleChange = (data) => {};

  return (
    <Form className="CalorieTypeForm">
      <Form.Check
        type="checkbox"
        id="breakfastCheckbox"
        label="Breakfast"
        onChange={() => handleChange("Breakfast")}
      />
      <br />
      <Form.Check
        type="checkbox"
        id="lunchCheckbox"
        label="Lunch"
        onChange={() => handleChange("Lunch")}
      />
      <br />
      <Form.Check
        type="checkbox"
        id="dinnerCheckbox"
        label="Dinner"
        onChange={() => handleChange("Dinner")}
      />
      <br />
      <Form.Check
        type="checkbox"
        id="snackCheckbox"
        label="Snack"
        onChange={() => handleChange("Snack")}
      />
      <br />
    </Form>
  );
}
