import React from "react";

import { CalorieInputForm } from "../components/CalorieInputForm";
import { CalorieTypeForm } from "../components/CalorieTypeForm";
import { CalorieResult } from "../components/CalorieResult";
import FormContainer from "../components/FormContainer";

function CalorieLog() {
  return (
    <>
      <FormContainer>
        <h1>Calorie Log</h1>
        <CalorieResult />
        <CalorieTypeForm />
      </FormContainer>
    </>
  );
}

export default CalorieLog;
