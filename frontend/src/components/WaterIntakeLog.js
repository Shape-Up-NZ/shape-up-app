import React, { useState } from 'react';
import './WaterIntakeLog.css';

const WaterIntakeLog = () => {
  const [totalWater, setTotalWater] = useState(4);
  const [loggedWater, setLoggedWater] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setLoggedWater(parseFloat(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalWater((prevTotal) => prevTotal - loggedWater);
    setLoggedWater(0);
  };

  return (
    <div className="water-intake-log">
      <h2 className="water-intake-log__total">Water to be consumed for today: {totalWater} litres</h2>
      <form onSubmit={handleSubmit} className="water-intake-log__form">
        <label className="water-intake-log__label">
          Log water consumed (in litres):
          <input
            type="number"
            min="0"
            step="0.05"
            value={loggedWater}
            onChange={handleChange}
            className="water-intake-log__input"
          />
        </label>
        <button type="submit" className="water-intake-log__button">Log</button>
      </form>
    </div>
  );
};

export default WaterIntakeLog;
