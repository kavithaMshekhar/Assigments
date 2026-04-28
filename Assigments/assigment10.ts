// Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
  let minPrice :number = Infinity;
  let maxProfit :number= 0;

  for (let i = 0; i < prices.length; i++) {
    // Update minimum price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate profit
    const profit :number= prices[i] - minPrice;
    // Update max profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}
// function call
console.log(maxProfit([7, 1, 5, 3, 6 ,4]));   // out put is 5
console.log(maxProfit([7, 6, 4, 3, 1]));       // output is 0