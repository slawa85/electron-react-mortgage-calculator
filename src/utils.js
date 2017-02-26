const loansCalculator = function () {
  const calculateRate = function (percentage) {
    return (percentage / 100) / 12;
  }

  const powRate = function (value, pow) {
    return Math.pow(value, pow);
  }

  return {
    monthlyPayments: function (principal, percentage, payments) {
      const rate =calculateRate(percentage);
      const pow = powRate((1+rate), payments);
      return parseFloat(principal * ( (rate*pow)/(pow-1) )).toFixed(2)
    },
  };
};

export default loansCalculator;
