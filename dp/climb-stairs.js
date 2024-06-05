function recursion(n) {
	if (n < 0) {
		return 0;
	}

	if (n === 0) {
		return 1;
	}

	return recursion(n - 2) + recursion(n - 1);
}

function memoize(n, memo = {}) {
	if (memo[n]) {
		return memo[n];
	}
	if (n < 0) {
		return 0;
	}

	if (n === 0) {
		return 1;
	}

	memo[n] = memoize(n - 2, memo) + memoize(n - 1, memo);

	return memo[n];
}

function tabulation(n) {
	let table = new Array(n + 1).fill(0);
	table[0] = 1;

	for (let i = 1; i < n + 1; i++) {
		table[i] = table[i - 1] + table[i - 2];
	}

	return table[n];
}

console.log(recursion(3)); //3
console.log('==================');
console.log(memoize(3)); //3
console.log(memoize(5)); //8
console.log(memoize(10)); //89
console.log(memoize(100));
console.log('==================');
console.log(tabulation(3));
console.log(tabulation(5));
console.log(tabulation(10)); //89
console.log(tabulation(100));
