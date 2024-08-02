function buySell(prices) {
	// let maxProfit = Number.MIN_SAFE_INTEGER;

	// for (let i = 0; i < prices.length; i++) {
	// 	for (j = i + 1; j < prices.length; j++) {
	// 		let profit = prices[j] - prices[i];
	// 		maxProfit = Math.max(maxProfit, profit);
	// 	}
	// }

	// return maxProfit <= 0 ? 0 : maxProfit;

	let minPrice = Number.MAX_SAFE_INTEGER,
		max = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else {
			max = Math.max(max, prices[i] - minPrice);
		}
	}

	return max;
}

console.log(buySell([7, 1, 5, 3, 6, 4]));
console.log(buySell([7, 6, 4, 3, 1]));
