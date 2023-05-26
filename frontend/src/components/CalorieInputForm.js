import React, { useState } from 'react';

function CalorieInputForm(props) {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleValue1Change = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {  // check if input is a positive integer
      setValue1(input);
    }
  };

  const handleValue2Change = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input)) {  // check if input is a positive integer
      setValue2(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value1 !== '' && value2 !== '') {
      const subtractionResult = parseInt(value1) - parseInt(value2);
      setValue1(subtractionResult.toString()); // set value1 to the result
      setValue2(''); // clear value2
      props.onSubmit(subtractionResult); // pass result to parent component
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="value1">Enter your calorie budget:</label>
        <br></br>
        <input type="number" id="value1" value={value1} onChange={handleValue1Change} />
        <br></br>
        <br></br>
      </div>
      <div>
        <label htmlFor="value2">Enter your calories:</label>
        <br></br>
        <input type="number" id="value2" value={value2} onChange={handleValue2Change} />
    
      </div>
      <button type="submit">Submit</button>
      <br></br>
      <br></br>
        
    </form>
  );
}

export default CalorieInputForm;
export{CalorieInputForm};