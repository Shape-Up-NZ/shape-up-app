import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    bmr = Math.trunc(bmr);
    const deficitCalories = bmr - 500;
    const maintenanceCalories = bmr;
    const bulkingCalories = bmr + 500;

    setResults({
      deficit: deficitCalories.toFixed(2),
      maintenance: maintenanceCalories.toFixed(2),
      bulking: bulkingCalories.toFixed(2),
    });
  };

  const [results, setResults] = useState({
    deficit: '',
    maintenance: '',
    bulking: '',
  });

  return (
    <form onSubmit={calculateCalories}>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button type="submit">Calculate Calories</button>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '5px' }}>Calorie Type</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '5px' }}>Deficit</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{results.deficit}</td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '5px' }}>Maintenance</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{results.maintenance}</td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '5px' }}>Bulking</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{results.bulking}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default CalorieCalculator;
