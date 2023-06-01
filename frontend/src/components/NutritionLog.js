import React, { useState } from 'react';
import axios from 'axios';

const MealLog = () => {
  const [foodItem, setFoodItem] = useState('');
  const [selectedTable, setSelectedTable] = useState('breakfast');
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [snacksItems, setSnacksItems] = useState([]);

  const handleAddItem = async () => {
    try {
      const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`, {
        headers: {
          'X-Api-Key': 'WOO23cTA4ww2yrQ+otISmw==Z3Q2fFBcCTeE3OWj' // Replace with your actual API key
        }
      });

      const data = response.data;
      // Assuming the response contains nutrition information for a single food item
      if (data.items.length > 0) {
        const item = data.items[0];
        const newItem = {
          name: item.name,
          calories: item.calories,
          protein: item.protein_g
        };

        switch (selectedTable) {
          case 'breakfast':
            setBreakfastItems((prevItems) => [...prevItems, newItem]);
            break;
          case 'lunch':
            setLunchItems((prevItems) => [...prevItems, newItem]);
            break;
          case 'dinner':
            setDinnerItems((prevItems) => [...prevItems, newItem]);
            break;
          case 'snacks':
            setSnacksItems((prevItems) => [...prevItems, newItem]);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error('Error fetching nutrition information:', error);
    }
  };

  const handleSelectTable = (event) => {
    setSelectedTable(event.target.value);
  };

  const renderTable = (meal, items) => (
    <div>
      <h2>{meal}</h2>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Calories</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Protein</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '5px' }}>{item.name}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{item.calories}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{item.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h2>Add Food Item</h2>
      <input
        type="text"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
        placeholder="Enter food item"
      />
      <select value={selectedTable} onChange={handleSelectTable}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>
      <button onClick={handleAddItem}>Add</button>

      {renderTable('Breakfast', breakfastItems)}
      {renderTable('Lunch', lunchItems)}
      {renderTable('Dinner', dinnerItems)}
      {renderTable('Snacks', snacksItems)}
    </div>
  );
};

export default MealLog;
