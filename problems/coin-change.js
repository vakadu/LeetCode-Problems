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

function memoizehelper(c, t, n, memo={}) {
	let key=`${t}-${n}`;
	if(key in memo) {
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
		return memo[key]
	} else {
		memo[key] = memoizehelper(c, t, n + 1, memo);
		return memo[key]
	}
}

console.log(recursion([1, 2, 5], 5));
console.log(memoize([1, 2, 5], 5));
console.log(memoize([3,5,7,8,9,10,11], 500));
