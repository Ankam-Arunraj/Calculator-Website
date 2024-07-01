import React, { useState } from 'react';
import axios from 'axios';

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/calculator/currency', { amount, fromCurrency, toCurrency });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error converting the currency!', error);
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="From Currency (e.g. USD)"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To Currency (e.g. EUR)"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {result && (
        <div>
          <p>Converted Amount: {result.convertedAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyCalculator;
