const Calculator = require('../models/Calculator');

const calculateSimpleInterest = (principal, rate, time) => {
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  return { interest, total };
};

exports.simpleInterest = (req, res) => {
  const { principal, rate, time } = req.body;
  const result = calculateSimpleInterest(principal, rate, time);

  const newCalculation = new Calculator({
    type: 'Simple Interest',
    inputs: { principal, rate, time },
    result,
  });

  newCalculation.save()
    .then(() => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err));
};

const calculateCompoundInterest = (principal, rate, timesCompounded, years) => {
  const amount = principal * Math.pow((1 + (rate / (timesCompounded * 100))), timesCompounded * years);
  const interest = amount - principal;
  return { interest, total: amount };
};

exports.compoundInterest = (req, res) => {
  const { principal, rate, timesCompounded, years } = req.body;
  const result = calculateCompoundInterest(principal, rate, timesCompounded, years);

  const newCalculation = new Calculator({
    type: 'Compound Interest',
    inputs: { principal, rate, timesCompounded, years },
    result,
  });

  newCalculation.save()
    .then(() => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err));
};

const calculateBMI = (weight, height) => {
  const bmi = weight / ((height / 100) ** 2);
  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obesity';
  return { bmi, category };
};

exports.bmiCalculator = (req, res) => {
  const { weight, height } = req.body;
  const result = calculateBMI(weight, height);

  const newCalculation = new Calculator({
    type: 'BMI',
    inputs: { weight, height },
    result,
  });

  newCalculation.save()
    .then(() => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err));
};

const currencyConversion = async (amount, fromCurrency, toCurrency) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  const data = await response.json();
  const rate = data.rates[toCurrency];
  const convertedAmount = amount * rate;
  return { convertedAmount };
};

exports.currencyCalculator = async (req, res) => {
  const { amount, fromCurrency, toCurrency } = req.body;
  try {
    const result = await currencyConversion(amount, fromCurrency, toCurrency);

    const newCalculation = new Calculator({
      type: 'Currency Conversion',
      inputs: { amount, fromCurrency, toCurrency },
      result,
    });

    await newCalculation.save();
    res.json(result);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};
