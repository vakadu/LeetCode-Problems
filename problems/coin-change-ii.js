function recursion(coins, amount) {
	let result = helper(coins, amount, 0);
	return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

function helper(c, t, n) {
	if (t === 0) {
		return 0;
	}

	if (n >= c.length || t < 0) {
		return Number.MAX_SAFE_INTEGER;
	}

	let min = Number.MAX_SAFE_INTEGER;

	if (t >= c[n]) {
		min = Math.min(1 + helper(c, t - c[n], n), helper(c, t, n + 1));
	} else {
		min = helper(c, t, n + 1);
	}

	return min;
}

function memoize(coins, amount) {
	let result = memoizehelper(coins, amount, 0);
	return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

function memoizehelper(c, t, n, memo = {}) {
	let key = `${t}-${n}`;
	if (key in memo) {
		return memo[key];
	}
	if (t === 0) {
		return 0;
	}

	if (n >= c.length || t < 0) {
		return Number.MAX_SAFE_INTEGER;
	}

	let min = Number.MAX_SAFE_INTEGER;

	if (t >= c[n]) {
		min = Math.min(1 + memoizehelper(c, t - c[n], n), memoizehelper(c, t, n + 1));
	} else {
		min = memoizehelper(c, t, n + 1);
	}

	memo[key] = min;

	return min;
}

function tabulation(coins, amount) {
	let table = new Array(coins.length + 1)
		.fill(Number.MAX_SAFE_INTEGER)
		.map(() => new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER));

	for (let i = 0; i < coins.length + 1; i++) {
		for (let j = 0; j < amount + 1; j++) {
			if (j === 0) {
				table[i][j] = 0;
			}
		}
	}

	for (let i = 1; i < coins.length + 1; i++) {
		for (let j = 1; j < amount + 1; j++) {
			if (j >= coins[i - 1]) {
				table[i][j] = Math.min(1 + table[i][j - coins[i - 1]], table[i - 1][j]);
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

	console.log(table);

	return table[coins.length][amount] === Number.MAX_SAFE_INTEGER
		? -1
		: table[coins.length][amount];
}

console.log(tabulation([1, 2, 5], 5));
