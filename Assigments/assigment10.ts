// Best Time to Buy and Sell Stock (price always decreasing no profit is possible)
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
 /* Day 1 (price = 7)
minPrice = 7  //(first value)
profit = 7 - 7 = 0
maxProfit = 0 */
/*Day 2 (price = 1)
minPrice = 1  //(better buying price!)
profit = 1 - 1 = 0
maxProfit = 0*/
/*Day 3 (price = 5)
profit = 5 - 1 = 4
maxProfit = 4*/
/*Day 4 (price = 3)
profit = 3 - 1 = 2
maxProfit = 4 */
/*Day 5 (price = 6)
profit = 6 - 1 = 5
maxProfit = 5*/ //(better selling day)
/*profit = 4 - 1 = 3
maxProfit = 5*/

console.log(maxProfit([7, 6, 4, 3, 1]));       // output is 0