import React, { useState } from 'react';

const App = () => {
  const [fitnessGoals, setFitnessGoals] = useState([
    { text: 'Fitness Goal 1', id: 'goal1' },
    { text: 'Fitness Goal 2', id: 'goal2' },
    { text: 'Fitness Goal 3!', id: 'goal3' }
  ]);

  const addGoalHandler = enteredText => {
    setFitnessGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setFitnessGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  if (fitnessGoals.length > 0) {
    content = (
      <FitnessGoalslist items={fitnessGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <FitnessGoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;