import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    let updatedBudget = parseInt(event.target.value, 10);
  
    // Ensure the new budget stays within the specified range
    if (updatedBudget < 1600) {
      alert("Budget cannot be less than 1600!");
      updatedBudget = 1600;
    } else if (updatedBudget > 20000) {
      alert("Budget cannot exceed 20000!");
      updatedBudget = 20000;
    }
  
    setNewBudget(updatedBudget);
  };

  const saveNewBudget = () => {
    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency} {budget}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
      <button className="btn btn-primary" onClick={saveNewBudget}>
        Save
      </button>
    </div>
  );
};

export default Budget;
