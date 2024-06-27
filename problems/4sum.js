function sum(nums, target) {
	nums.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			continue;
		}
		for (let j = i + 1; j < nums.length; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue;
			}
			let start = j + 1,
				end = nums.length - 1;
			while (start < end) {
				let sum = nums[i] + nums[j] + nums[start] + nums[end];

				if (sum === target) {
					result.push([nums[i], nums[j], nums[start], nums[end]]);
					while (start < end && nums[start] === nums[start + 1]) {
						start++;
					}
					while (start < end && nums[end] === nums[end - 1]) {
						end--;
					}
					start++;
					end--;
				} else if (sum < target) {
					start++;
				} else {
					end--;
				}
			}
		}
	}

	return result;
}

console.log(sum([1, 0, -1, 0, -2, 2], 0)); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(sum([2, 2, 2, 2], 8)); //[[2,2,2,2]]
