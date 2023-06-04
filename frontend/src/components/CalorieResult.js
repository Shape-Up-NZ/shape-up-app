import React, { useState } from 'react';
import CalorieInputForm from './CalorieInputForm';

function CalorieResult() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (subtractionResult) => {
    setResult(subtractionResult);
  };

  return (
    <div>
      <br></br>
        <br></br>
      <CalorieInputForm onSubmit={handleFormSubmit} />
      {result !== null && <div>Calories left over: {result}</div>}
      <br></br>
        <br></br>
    </div>
  );
}

export default CalorieResult;
export{CalorieResult};