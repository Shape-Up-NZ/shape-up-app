import React from 'react';
 
const FitnessGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <FitnessGoalItem>
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        
          {goal.text}
        </FitnessGoalItem>
      ))}
    </ul>
  );
};

export default FitnessGoalList;