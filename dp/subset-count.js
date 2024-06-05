function recursion(sets, target) {
	return recursionhelper(sets, target, 0);
}

function recursionhelper(s, t, n) {
	if (n > s.length) {
		return 0;
	}

	if (t === 0) {
		return 1;
	}

	if (t >= s[n]) {
		let diff = t - s[n];
		return recursionhelper(s, diff, n + 1) + recursionhelper(s, t, n + 1);
	} else {
		return recursionhelper(s, t, n + 1);
	}
}

function memoize(sets, target) {
	return memoizehelper(sets, target, 0);
}

function memoizehelper(s, t, n, memo = {}) {
	let key = `${t}-${n}`;
	if (key in memo) {
		return memo[key];
	}
	if (n > s.length) {
		return 0;
	}

	if (t === 0) {
		return 1;
	}

	if (t >= s[n]) {
		let diff = t - s[n];
		memo[key] = memoizehelper(s, diff, n + 1) + memoizehelper(s, t, n + 1);
		return memo[key];
	} else {
		memo[key] = memoizehelper(s, t, n + 1);
		return memo[key];
	}
}

function tabluation(sets, target) {
	let table = new Array(sets.length + 1).fill(0).map(() => new Array(target + 1).fill(0));
	for (let i = 0; i < sets.length + 1; i++) {
		for (let j = 0; j < target + 1; j++) {
			if (j == 0) {
				table[i][j] = 1;
			}
		}
	}

	for (let i = 1; i < sets.length + 1; i++) {
		for (let j = 1; j < target + 1; j++) {
			if (j >= sets[i - 1]) {
				table[i][j] = table[i - 1][j - sets[i - 1]] + table[i - 1][j];
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

	return table[sets.length][target];
}

console.log(tabluation([2, 3, 5, 6, 8, 10], 10)); //3
console.log(tabluation([3, 34, 4, 12, 5, 2], 9)); //2
console.log(tabluation([3, 34, 4, 12, 5, 2], 30)); //0
console.log(tabluation([4, 16, 5, 23, 12], 9)); //1
console.log(tabluation([2, 3, 5, 6, 8, 10], 10)); //3
console.log(tabluation([3, 34, 4, 12, 5, 2], 10)); //1
console.log(tabluation([2, 3, 5, 7, 10], 14)); //1
console.log('=================');
console.log(recursion([2, 3, 5, 6, 8, 10], 10)); //3
console.log(recursion([3, 34, 4, 12, 5, 2], 9)); //2
console.log(recursion([3, 34, 4, 12, 5, 2], 30)); //0
console.log(recursion([4, 16, 5, 23, 12], 9)); //1
console.log(recursion([2, 3, 5, 6, 8, 10], 10)); //3
console.log(recursion([3, 34, 4, 12, 5, 2], 10)); //1
console.log(recursion([2, 3, 5, 7, 10], 14)); //1
console.log('=================');
console.log(memoize([2, 3, 5, 6, 8, 10], 10)); //3
console.log(memoize([3, 34, 4, 12, 5, 2], 9)); //2
console.log(memoize([3, 34, 4, 12, 5, 2], 30)); //0
console.log(memoize([4, 16, 5, 23, 12], 9)); //1
console.log(memoize([2, 3, 5, 6, 8, 10], 10)); //3
console.log(memoize([3, 34, 4, 12, 5, 2], 10)); //1
console.log(memoize([2, 3, 5, 7, 10], 14)); //1
