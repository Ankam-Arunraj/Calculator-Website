

import React from 'react';

import { BrowserRouter ,Routes, Route,  } from 'react-router-dom';
import Home from './components/Home';
import SimpleInterestCalculator from './components/Financial/SimpleInterestCalculator';
import CompoundInterestCalculator from './components/Financial/CompoundInterestCalculator';
import BMICalculator from './components/HealthAndFitness/BMICalculator';
import CurrencyCalculator from './components/Conversion/CurrencyCalculator';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
         <Route path="/" exact component={Home} /> 
        <Route path="/simple-interest" component={SimpleInterestCalculator} />
        <Route path="/compound-interest" component={CompoundInterestCalculator} />
        <Route path="/bmi" component={BMICalculator} />
        <Route path="/currency" component={CurrencyCalculator} />
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;

