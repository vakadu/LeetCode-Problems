function linear(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums[i].length; j++) {
			console.log(nums[i][j]);
			if (nums[i][j] === target) {
				return [i, j];
			}
		}
	}
	return -1;
}

function bs(nums, target) {
	let i = 0,
		j = nums[i].length - 1;

	while (i < nums.length) {
		if (target === nums[i][j]) {
			return [i, j];
		} else if (target < nums[i][j]) {
			j--;
		} else {
			i++;
		}
	}

	return -1;
}

console.log(
	bs(
		[
			[10, 20, 30, 40],
			[15, 25, 35, 45],
			[27, 29, 37, 48],
			[32, 33, 39, 50],
		],
		29
	)
);
console.log(
	bs(
		[
			[10, 20, 30, 40],
			[15, 25, 35, 45],
			[27, 28, 37, 48],
			[29, 33, 39, 50],
		],
		29
	)
);
console.log(
	bs(
		[
			[10, 20, 30, 40],
			[15, 25, 35, 45],
			[27, 28, 37, 48],
			[29, 33, 39, 50],
		],
		18
	)
);
// console.log(
// 	linear(
// 		[
// 			[10, 20, 30, 40],
// 			[15, 25, 35, 45],
// 			[27, 29, 37, 48],
// 			[32, 33, 39, 50],
// 		],
// 		29
// 	)
// );
