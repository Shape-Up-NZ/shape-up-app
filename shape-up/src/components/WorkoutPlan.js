import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkoutPlan = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutPlan, setWorkoutPlan] = useState([{ exercise: "", sets: 0, reps: 0 }]);

  // Fetch a list of exercises from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exercisedb.p.rapidapi.com/exercises",
          {
            headers: {
              "x-rapidapi-host": "exercisedb.p.rapidapi.com",
              "x-rapidapi-key": "6e34b00e3cmsh906569fec1b49b7p1f3755jsnb0fdea2f124c",
            },
            params: {
              muscles: "chest,triceps",
              equipment: "barbell",
              difficulty: "3",
            },
          }
        );
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Generate a random workout plan when the list of exercises changes
  useEffect(() => {
    if (exercises.length > 0) {
      const randomExercises = [];
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * exercises.length);
        randomExercises.push(exercises[randomIndex]);
      }
      const newWorkoutPlan = randomExercises.map((exercise) => {
        const sets = Math.floor(Math.random() * 4) + 1;
        const reps = Math.floor(Math.random() * 10) + 5;
        return {
          exercise: exercise.name,
          sets,
          reps,
        };
      });
      setWorkoutPlan(newWorkoutPlan);
    }
  }, [exercises]);

  return (
    <div>
      <h2>Workout Generator</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Exercise</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Sets</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlan.map((exercise, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "5px" }}>{exercise.exercise}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{exercise.sets}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{exercise.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutPlan;
