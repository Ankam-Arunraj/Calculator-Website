import React, { useState } from 'react';
import axios from 'axios';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/calculator/simple-interest', { principal, rate, time });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error calculating the simple interest!', error);
    }
  };

  return (
    <div>
      <h2>Simple Interest Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <div>
          <p>Interest: {result.interest}</p>
          <p>Total Amount: {result.total}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;
