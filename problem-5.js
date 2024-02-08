function monthlySavings(arr, livingCost) {
  if (
    Array.isArray(arr) === false ||
    typeof livingCost !== "number" ||
    isNaN(livingCost) === true
  ) {
    return "invalid input";
  }

  let totalEarning = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      payment = payment - payment * (20 / 100);
      totalEarning = totalEarning + payment;
    } else {
      totalEarning = totalEarning + payment;
    }
  }

  const savings = totalEarning - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

const totalSavings = monthlySavings([1000, 2000, 2500], 5000);
console.log(totalSavings);
