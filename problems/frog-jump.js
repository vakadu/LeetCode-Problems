function jump(nums) {
	return helper(nums, 0);
}

function helper(nums, n, memo = {}) {
	if (n in memo) {
		return memo[n];
	}
	if (n >= nums.length - 1) {
		return true;
	}

	for (let i = 1; i <= nums[n]; i++) {
		if (helper(nums, n + i, memo)) {
			memo[n] = true;
			return true;
		}
	}

	memo[n] = false;
	return false;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([3, 2, 1, 0, 4]));
console.log(jump([1, 0, 1, 0]));
