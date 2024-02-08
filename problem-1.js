function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  const ticketPrice = 120;
  const totalCost = 500 + 8 * 50;

  const totalSale = ticketPrice * ticketSale;
  const totalEarning = totalSale - totalCost;

  return totalEarning;
}

const todaysEarning = calculateMoney(10);
console.log(todaysEarning);
