// function recursion(nums) {
// 	let left = helper(nums.length > 1 ? nums.slice(0, nums.length - 1) : nums, 0);
// 	let right = helper(nums.length > 1 ? nums.slice(1, nums.length) : nums, 0);

// 	return Math.max(left, right);
// }

// function helper(nums, n, memo = {}) {
// 	if (n in memo) {
// 		return memo[n];
// 	}
// 	if (n >= nums.length) {
// 		return 0;
// 	}

// 	memo[n] = Math.max(nums[n] + helper(nums, n + 2, memo), helper(nums, n + 1, memo));
// 	return memo[n];
// }

// console.log(recursion([2, 3, 2])); //3
// console.log(recursion([1, 2, 3, 1])); //4
// console.log(recursion([1, 2, 3])); //3
// console.log(recursion([1]));
// console.log(recursion([0]));
// console.log(recursion([100]));

function permutations2(p, up) {
	if (up === '') {
		return [p];
	}

	let ch = up.charAt(0);
	let result = [];

	for (let i = 0; i <= p.length; i++) {
		let f = p.slice(0, i);
		let l = p.slice(i, p.length);

		let ans = permutations2(f + ch + l, up.slice(1));
		result.push(...ans);
		// result = result.concat(ans) //we can use concat also
	}
	return result;
}

console.log(permutations2('', 'abc'));
