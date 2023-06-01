import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

const WorkoutPlan = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutPlan, setWorkoutPlan] = useState([
    { exercise: "", sets: 0, reps: 0 },
  ]);
  const [muscles, setMuscles] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exercisedb.p.rapidapi.com/exercises",
          {
            headers: {
              "x-rapidapi-host": "exercisedb.p.rapidapi.com",
              "x-rapidapi-key":
                "3190d2cd3amshe401585bbe87576p18b44djsn7669ffd89aa8",
            },
            params: {
              muscles,
              equipment: "dumbbell",
              difficulty: "1",
            },
          }
        );
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [muscles]);

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
      <h2>Bro-Split Workout Generator</h2>
      <div>
        <Form.Group controlId="muscles">
          <Form.Label>Select muscles:</Form.Label>
          <Form.Control
            as="select"
            value={muscles}
            onChange={(e) => setMuscles(e.target.value)}
          >
            <option value="">Select a muscle group</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="shoulders">Shoulders</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="legs">Legs</option>
            <option value="abs">Abs</option>
          </Form.Control>
        </Form.Group>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlan.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.exercise}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WorkoutPlan;
