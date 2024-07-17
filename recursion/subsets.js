function recursion(nums) {
	return helper(nums, []);
}

function helper(nums, p) {
	if (nums.length <= 0) {
		return [p];
	}

	let first = nums[0];
	let left = helper(nums.slice(1), p.concat(first));
	let right = helper(nums.slice(1), p);

	return [...left, ...right];
}

function subsetStr(s) {
	return strHelper(s, '');
}

function strHelper(s, p) {
	if (s.length <= 0) {
		return [p];
	}

	let first = s.charAt(0);
	let left = strHelper(s.slice(1), p + first);
	let right = strHelper(s.slice(1), p);

	return [...left, ...right];
}

// console.log(recursion([1, 2, 3]));
// console.log(recursion([0]));

console.log(subsetStr('abc'));
console.log(subsetStr('aa'));
// console.log(recursion([0]));
