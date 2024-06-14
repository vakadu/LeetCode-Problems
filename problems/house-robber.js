function houseRobber(nums) {
	return helper(nums, 0);
}

function helper(nums, n, memo = {}) {
	if (n in memo) {
		return memo[n];
	}
	if (n >= nums.length) {
		return 0;
	}

	memo[n] = Math.max(nums[n] + helper(nums, n + 2, memo), helper(nums, n + 1, memo));
	return memo[n];
}

function tabulation(nums) {
	let table = new Array(nums.length).fill(0);

	table[0] = nums[0];
	table[1] = Math.max(nums[0], nums[1]);

	for (let i = 2; i < nums.length; i++) {
		table[i] = Math.max(nums[i] + table[i - 2], table[i - 1]);
	}
	console.log(table);

	return table[nums.length - 1];
}

console.log(tabulation([1, 2, 3, 1])); //4
console.log(tabulation([2, 7, 9, 3, 1])); //7
