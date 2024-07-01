const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculatorSchema = new Schema({
  type: { type: String, required: true },
  inputs: { type: Object, required: true },
  result: { type: Object, required: true },
}, {
  timestamps: true,
});

const Calculator = mongoose.model('Calculator', calculatorSchema);
module.exports = Calculator;
