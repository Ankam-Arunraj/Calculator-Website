import React, { useState } from 'react';
import axios from 'axios';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/calculator/bmi', { weight, height });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error calculating the BMI!', error);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <div>
          <p>BMI: {result.bmi}</p>
          <p>Category: {result.category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
