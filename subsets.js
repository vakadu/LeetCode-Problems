function subsets(nums) {
	return helper(nums, []);
}

function helper(nums, subset) {
	if (nums.length === 0) {
		return [subset];
	}
	let first = nums[0];

	let left = helper(nums.slice(1), [first, ...subset]);
	let right = helper(nums.slice(1), subset);

	return [...left, ...right];
}

console.log(subsets([1, 2, 3]));
