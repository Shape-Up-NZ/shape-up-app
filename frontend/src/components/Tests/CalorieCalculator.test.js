import { render, fireEvent, screen } from "@testing-library/react";
import CalorieCalculator from "../CalorieCalculator";
import "@testing-library/jest-dom";

describe("CalorieCalculator", () => {
  test("calculates calories correctly", () => {
    // Render the component in a test
    render(<CalorieCalculator />);

    // Fill in the form with some test data
    fireEvent.change(screen.getByLabelText(/age/i), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByLabelText(/weight/i), {
      target: { value: "70" },
    });
    fireEvent.change(screen.getByLabelText(/height/i), {
      target: { value: "170" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/calculate calories/i));

    // Check the results
    expect(screen.getByTestId("deficit")).toHaveTextContent("1117.00");
    expect(screen.getByTestId("maintenance")).toHaveTextContent("1617.00");
    expect(screen.getByTestId("bulking")).toHaveTextContent("2117.00");
  });
});
