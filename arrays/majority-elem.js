var majorityElement = function (nums) {
	let map = new Map(),
		max = Math.ceil(nums.length / 2);

	for (let num of nums) {
		map.set(num, map.get(num) + 1 || 1);

		if (map.get(num) >= max) {
			return num;
		}
	}
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
