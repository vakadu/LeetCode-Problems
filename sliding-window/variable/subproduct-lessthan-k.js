function subProduct(nums, k) {
	let i = 0,
		j = 0,
		result = [];

	while (i < nums.length) {
		if (nums[i] * nums[j] < 100) {
			let temp = nums.slice(i, j + 1);
			result.push(temp);
			j++;
		} else {
			i++;
		}
	}

	console.log(result);
}

subProduct([10, 5, 2, 6], 100);
