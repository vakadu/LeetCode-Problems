//not finished

function peakElmt(nums) {
	let s = 0,
		e = nums.length - 1,
		result = -1;

	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);

		if (mid !== 0 || mid == nums.length - 1) {
			if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
				return mid;
			} else if (nums[mid] < nums[mid + 1] && nums[mid] > nums[mid - 1]) {
				result = mid + 1;
				s = mid + 1;
			} else {
				e = mid - 1;
			}
		} else if (mid === 0) {
			if (nums[0] > nums[1]) {
				return 0;
			} else {
				return 1;
			}
		}
	}
	return result;
}

// console.log(peakElmt([5, 10, 20, 15]));
console.log(peakElmt([5, 10, 20, 30]));
