function singleNumber(nums) {
	let map = new Map();

	for (let num of nums) {
		map.set(num, map.get(num) + 1 || 1);
	}

	for (let [key, val] of map) {
		if (val === 1) {
			return key;
		}
	}
}

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
