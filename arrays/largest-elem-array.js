function find(arr) {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		max = Math.max(arr[i], max);
	}

	return max;
}

console.log(find([2, 5, 1, 3, 0]));
