function removeDuplicates(nums) {
	let k = 1;

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] !== nums[i + 1]) {
			nums[k] = nums[i + 1];
			k++;
		}
	}
	console.log(nums, k);
}

// removeDuplicates([1, 1, 2]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

function removeElemt(nums, val) {
	let k = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i];
			k++;
		}
	}
	console.log(k, nums);
}

removeElemt([3, 2, 2, 3], 3);
removeElemt([0, 1, 2, 2, 3, 0, 4, 2], 2);
