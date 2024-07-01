import React, { useState } from 'react';
import axios from 'axios';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [timesCompounded, setTimesCompounded] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/calculator/compound-interest', { principal, rate, timesCompounded, years });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error calculating the compound interest!', error);
    }
  };

  return (
    <div>
      <h2>Compound Interest Calculator</h2>
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
          placeholder="Times Compounded"
          value={timesCompounded}
          onChange={(e) => setTimesCompounded(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
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

export default CompoundInterestCalculator;
