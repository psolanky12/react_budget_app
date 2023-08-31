import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');

    const handleBudgetChange = () => {
        if (newBudget !== '' && !isNaN(newBudget)) {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseFloat(newBudget)
            });
            setNewBudget('');
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <div>
                <input
                    type='number'
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                />
                <button onClick={handleBudgetChange}>Change Budget</button>
            </div>
        </div>
    );
};

export default Budget;
