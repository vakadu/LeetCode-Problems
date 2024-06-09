function recursion(strs, m, n) {
	return helper(strs, m, n, 0, 0, 0);
}

function helper(strs, m, n, k, zeros, ones) {
	if (k >= strs.length) {
		return 0;
	}
	let one = 0,
		zero = 0;

	for (i = 0; i < strs[k].length; i++) {
		if (strs[k][i] === '1') {
			one++;
		} else {
			zero++;
		}
	}

	if (zero + zeros <= m && one + ones <= n) {
		return Math.max(
			1 + helper(strs, m, n, k + 1, zero + zeros, one + ones),
			0 + helper(strs, m, n, k + 1, zeros, ones)
		);
	} else {
		return 0 + helper(strs, m, n, k + 1, zeros, ones);
	}
}

function memoize(strs, m, n) {
	return memoizehelper(strs, m, n, 0, 0, 0);
}

function memoizehelper(strs, m, n, k, zeros, ones, memo = {}) {
	let key = `${k} - ${zeros} - ${ones}`;

	if (key in memo) {
		return memo[key];
	}
	if (k >= strs.length) {
		return 0;
	}
	let one = 0,
		zero = 0;

	for (i = 0; i < strs[k].length; i++) {
		if (strs[k][i] === '1') {
			one++;
		} else {
			zero++;
		}
	}

	if (zero + zeros <= m && one + ones <= n) {
		memo[key] = Math.max(
			1 + memoizehelper(strs, m, n, k + 1, zero + zeros, one + ones, memo),
			0 + memoizehelper(strs, m, n, k + 1, zeros, ones, memo)
		);
		return memo[key];
	} else {
		memo[key] = 0 + memoizehelper(strs, m, n, k + 1, zeros, ones, memo);
		return memo[key];
	}
}

function tabulation(strs, m, n) {
	let table = new Array(strs.length + 1)
		.fill(0)
		.map(() => new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0)));
	console.log(table);
}

console.log('========================');
console.log(tabulation(['10', '0001', '111001', '1', '0'], 5, 3));
// console.log(tabulation(['10', '0', '1'], 1, 1));
console.log('========================');
console.log(recursion(['10', '0001', '111001', '1', '0'], 5, 3));
console.log(recursion(['10', '0', '1'], 1, 1));
console.log('========================');
console.log(memoize(['10', '0001', '111001', '1', '0'], 5, 3));
console.log(memoize(['10', '0', '1'], 1, 1));
console.log(
	memoize(
		[
			'11',
			'11',
			'0',
			'0',
			'10',
			'1',
			'1',
			'0',
			'11',
			'1',
			'0',
			'111',
			'11111000',
			'0',
			'11',
			'000',
			'1',
			'1',
			'0',
			'00',
			'1',
			'101',
			'001',
			'000',
			'0',
			'00',
			'0011',
			'0',
			'10000',
		],
		90,
		66
	)
);
