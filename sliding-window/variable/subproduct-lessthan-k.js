function subProduct(nums, k) {
	let result = [],
		product = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < k) {
			result.push([nums[i]]);
		}

		product = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			product *= nums[j];

			if (product < k) {
				let temp = nums.slice(i, j + 1);
				result.push(temp);
			} else {
				break;
			}
		}
	}
	console.log(result);

	// let i = 0,
	// 	result = [];
	// while (i < nums.length) {
	// 	for (let j = i; j < nums.length; j++) {
	// 		if (nums[i] * nums[j] < k) {
	// 			let temp = nums.slice(i, j + 1);
	// 			result.push(temp);
	// 		}
	// 	}
	// 	i++;
	// }
	// console.log(result);
}

subProduct([10, 5, 2, 6], 100);
