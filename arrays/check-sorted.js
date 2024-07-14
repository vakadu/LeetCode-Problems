function checkSorted(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}

	return true;
}

console.log(checkSorted([1, 2, 3, 4, 5]));
console.log(checkSorted([5, 4, 6, 7, 8]));
