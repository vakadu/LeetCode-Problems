function recursion(nums, target) {
	return helper(nums, target, 0);
}

function helper(c, t, n) {
	if (t === 0) {
		return 1;
	}
	if (n >= c.length) {
		return 0;
	}

	if (t >= c[n]) {
		return helper(c, t - c[n], n) + helper(c, t, n + 1);
	} else {
		return helper(c, t, n + 1);
	}
}

function memoize(nums, target) {
	return memoizehelper(nums, target, 0);
}

function memoizehelper(c, t, n, memo = {}) {
	let key = `${t}-${n}`;
	if (key in memo) {
		return memo[key];
	}
	if (t === 0) {
		return 1;
	}
	if (n >= c.length) {
		return 0;
	}

	if (t >= c[n]) {
		memo[key] = memoizehelper(c, t - c[n], n, memo) + memoizehelper(c, t, n + 1, memo);
		return memo[key];
	} else {
		memo[key] = memoizehelper(c, t, n + 1, memo);
		return memo[key];
	}
}

function tabulation(amount, coins) {
	let table = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(0));

	for (let i = 0; i < coins.length + 1; i++) {
		for (let j = 0; j < amount + 1; j++) {
			if (j === 0) {
				table[i][j] = 1;
			}
		}
	}

	for (let i = 1; i < coins.length + 1; i++) {
		for (let j = 1; j < amount + 1; j++) {
			if (j >= coins[i - 1]) {
				table[i][j] = table[i][j - coins[i - 1]] + table[i - 1][j];
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

	return table[coins.length][amount];
}

console.log(recursion([1, 2, 5], 5));
console.log(memoize([1, 2, 5], 5));
console.log(memoize([3, 5, 7, 8, 9, 10, 11], 500));
console.log(tabulation(5, [1, 2, 5]));
console.log(tabulation(500, [3, 5, 7, 8, 9, 10, 11]));
