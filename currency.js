import React, { useContext } from 'react';
import { AppContext, currencies } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, handleCurrencyChange } = useContext(AppContext);

    return (
        <div>
            <label>Select Currency:</label>
            <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                {currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                        {c.symbol} {c.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
