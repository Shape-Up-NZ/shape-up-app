import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

function CalorieInputForm(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleValue1Change = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      // check if input is a positive integer
      setValue1(input);
    }
  };

  const handleValue2Change = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {
      // check if input is a positive integer
      setValue2(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value1 !== "" && value2 !== "") {
      const subtractionResult = parseInt(value1) - parseInt(value2);
      setValue1(subtractionResult.toString()); // set value1 to the result
      setValue2(""); // clear value2
      props.onSubmit(subtractionResult); // pass result to parent component
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="value1">Enter your calorie budget:</FormLabel>
        <br />
        <FormControl
          type="number"
          id="value1"
          value={value1}
          onChange={handleValue1Change}
        />
        <br />
        <br />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="value2">Enter your calories:</FormLabel>
        <br />
        <FormControl
          type="number"
          id="value2"
          value={value2}
          onChange={handleValue2Change}
        />
      </FormGroup>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>

      <br />
      <br />
    </Form>
  );
}

export default CalorieInputForm;
export { CalorieInputForm };
