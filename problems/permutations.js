function permutations(nums) {
	return helper(nums, []);
}

function helper(nums, p) {
	if (nums.length === 0) {
		return [p];
	}

	let first = nums.slice(0, 1),
		remain = nums.slice(1),
		result = [];

	for (let i = 0; i <= p.length; i++) {
		let temp = helper(remain, first);
		console.log(temp);
	}
}

console.log(permutations([1, 2, 3]));
