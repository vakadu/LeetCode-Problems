function recursion(nums) {
	return helper(nums, 0);
}

function helper(nums, n, memo = {}) {
	if (n in memo) {
		return memo[n];
	}
	if (n >= nums.length - 1) {
		return 0;
	}

	let min = Number.MAX_SAFE_INTEGER;

	for (let i = 1; i <= nums[n]; i++) {
		min = Math.min(min, 1 + helper(nums, n + i, memo));
	}

	memo[n] = min;

	return min;
}

console.log(recursion([2, 3, 1, 1, 4]));
console.log(recursion([2, 3, 0, 1, 4]));
console.log(
	recursion([
		5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8,
		8, 4, 4, 2, 0, 3, 8, 5,
	])
);
