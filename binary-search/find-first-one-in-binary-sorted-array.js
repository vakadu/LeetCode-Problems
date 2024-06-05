function findOne(nums) {
	let start = 0,
		end = 1;

	while (nums[end] < 1) {
		start = end;
		end = end * 2;
	}
	return firstOccur(start, end, nums);
}

function firstOccur(s, e, nums) {
	let result = -1;
	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);
		if (nums[mid] === 1) {
			result = mid;
			e = mid - 1;
		} else if (nums[mid] <= 0) {
			s = mid + 1;
		} else {
			e = mid - 1;
		}
	}
	return result;
}

console.log(findOne([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1])); //9
console.log(findOne([0, 0, 0, 0, 0, 0, 1, 1, 1, 1])); //6
console.log(findOne([0, 0, 0, 0, 0, 0, 0, 0, 0])); //-1
