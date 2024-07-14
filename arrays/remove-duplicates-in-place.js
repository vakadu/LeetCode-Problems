function removeDuplicates(arr) {
	let count = 1;

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			arr[count] = arr[i + 1];
			count++;
		}
	}

	return arr;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]));
