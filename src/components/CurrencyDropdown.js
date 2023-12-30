import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-success">
      <label htmlFor="currency">Select Currency: </label>
      <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;