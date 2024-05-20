function howSum(nums, target, memo = {}) {
	if (target in memo) {
		return memo[target];
	}
	if (target < 0) return null;
	if (target === 0) return [];

	for (let num of nums) {
		let remainder = target - num;
		let result = howSum(nums, remainder, memo);
		console.log(result, memo);

		if (result && result !== null) {
			memo[target] = [...result, num];
			return memo[target];
		}
	}

	memo[target] = null;
	return null;
}

function tabulation(nums, target) {
	let arr = new Array(target + 1).fill(null);
	arr[0] = [];

	console.log(arr);

	for (let i = 0; i <= target; i++) {
		if (arr[i] !== null) {
			for (let num of nums) {
				arr[i + num] = [...arr[i], num];
			}
		}
	}
	console.log(arr);
}

console.log(tabulation([5, 3, 4], 7));
// console.log(howSum([2,3], 7));
