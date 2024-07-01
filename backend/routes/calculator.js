const router = require('express').Router();
const { simpleInterest, compoundInterest, bmiCalculator, currencyCalculator } = require('../controllers/calculatorController');

router.route('/simple-interest').post(simpleInterest);
router.route('/compound-interest').post(compoundInterest);
router.route('/bmi').post(bmiCalculator);
router.route('/currency').post(currencyCalculator);

module.exports = router;
