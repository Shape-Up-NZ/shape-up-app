import React, { useState } from 'react';
import axios from 'axios';
import './ExerciseDB.css';

const ExercisePage = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

  const handleMuscleChange = (e) => {
    setSelectedMuscle(e.target.value);
  };

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedMuscle}`,
      headers: {
        'X-RapidAPI-Key': '3190d2cd3amshe401585bbe87576p18b44djsn7669ffd89aa8',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="select-container">
        <select value={selectedMuscle} onChange={handleMuscleChange}>
          <option value="">Select a muscle</option>
          <option value="back">Back</option>
          <option value="cardio">Cardio</option>
          <option value="chest">Chest</option>
          <option value="lower%20arms">Lower Arms</option>
          <option value="lower%20legs">Lower Legs</option>
          <option value="neck">Neck</option>
          <option value="shoulders">Shoulders</option>
          <option value="upper%20arms">Upper Arms</option>
          <option value="upper%20legs">Upper Legs</option>
          <option value="waist">Waist</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      {currentExercises.length > 0 ? (
        <div className="exercise-container">
          {currentExercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <h3>{exercise.name}</h3>
              <div className="gif-container">
                <img src={exercise.gifUrl} alt={exercise.name} className="exercise-gif" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No exercises found.</p>
      )}
      {exercises.length > exercisesPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
