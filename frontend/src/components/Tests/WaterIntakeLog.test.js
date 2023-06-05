import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WaterIntakeLog from "../WaterIntakeLog";

test("renders WaterIntakeLog", () => {
  const { getByText, getByLabelText } = render(<WaterIntakeLog />);

  // check if the component renders the initial state correctly
  expect(
    getByText("Water to be consumed for today: 4 litres")
  ).toBeInTheDocument();

  // check if the form field is rendered
  const inputField = getByLabelText(/log water consumed/i);
  expect(inputField).toBeInTheDocument();
  expect(inputField.value).toBe("0");
});

test("log water intake", () => {
  const { getByText, getByLabelText, getByRole } = render(<WaterIntakeLog />);
  const inputField = getByLabelText(/log water consumed/i);
  const logButton = getByRole("button");

  // simulate typing 2 litres into the input field
  fireEvent.change(inputField, { target: { value: "2" } });
  expect(inputField.value).toBe("2");

  // simulate clicking the Log button
  fireEvent.click(logButton);

  // check if the total water to be consumed is updated correctly
  expect(
    getByText("Water to be consumed for today: 2 litres")
  ).toBeInTheDocument();
  // check if the input field is reset to 0
  expect(inputField.value).toBe("0");
});
