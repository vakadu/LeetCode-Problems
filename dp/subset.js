function recursion(sets, target) {
	return recursionhelper(sets, target, 0);
}

function recursionhelper(s, t, n) {
	if (n === s.length) {
		return false;
	}
	if (t === 0) {
		return true;
	}

	if (s[n] <= t) {
		let diff = t - s[n];
		return recursionhelper(s, diff, n + 1) || recursionhelper(s, t, n + 1);
	} else {
		return recursionhelper(s, t, n + 1);
	}
}

function memoize(sets, target) {
	return memoizehelper(sets, target, 0);
}

function memoizehelper(s, t, n, memo = {}) {
	let key = `${t}-${n}`;

	if (memo[key]) {
		return memo[key];
	}

	if (n === s.length) {
		return false;
	}
	if (t === 0) {
		return true;
	}

	if (s[n] <= t) {
		let diff = t - s[n];
		memo[key] = memoizehelper(s, diff, n + 1, memo) || memoizehelper(s, t, n + 1, memo);
		return memo[key];
	} else {
		memo[key] = memoizehelper(s, t, n + 1);
		return memo[key];
	}
}

function tabluation(sets, target) {
	let table = new Array(sets.length + 1).fill(false).map(() => new Array(target + 1).fill(false));

	for (let i = 0; i < sets.length + 1; i++) {
		for (let j = 0; j < target + 1; j++) {
			if (j === 0) {
				table[i][j] = true;
			}
		}
	}

	for (let i = 1; i < sets.length + 1; i++) {
		for (let j = 1; j < target + 1; j++) {
			if (j >= sets[i - 1]) {
				if (table[i - 1][j] === true) {
					table[i][j] = true;
				} else {
					let diff = j - sets[i - 1];
					table[i][j] = table[i - 1][diff];
				}
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

	return table[sets.length][target];
}

console.log(tabluation([3, 34, 4, 12, 5, 2], 9)); //true
console.log(tabluation([3, 34, 4, 12, 5, 2], 30)); //false
console.log(tabluation([4, 16, 5, 23, 12], 9)); //true
console.log(tabluation([2, 3, 5, 6, 8, 10], 10)); //true
console.log(tabluation([3, 34, 4, 12, 5, 2], 10));
console.log(tabluation([2, 3, 5, 7, 10], 14));
console.log(tabluation([2, 3, 7, 8, 10], 1));
console.log('=================');
console.log(recursion([3, 34, 4, 12, 5, 2], 9)); //true
console.log(recursion([3, 34, 4, 12, 5, 2], 30)); //false
console.log(recursion([4, 16, 5, 23, 12], 9)); //true
console.log(recursion([2, 3, 5, 6, 8, 10], 10)); //true
console.log(recursion([3, 34, 4, 12, 5, 2], 10));
console.log(recursion([2, 3, 5, 7, 10], 14));
console.log('=================');
console.log(memoize([3, 34, 4, 12, 5, 2], 9)); //true
console.log(memoize([3, 34, 4, 12, 5, 2], 30)); //false
console.log(memoize([4, 16, 5, 23, 12], 9)); //true
console.log(memoize([2, 3, 5, 6, 8, 10], 10)); //true
