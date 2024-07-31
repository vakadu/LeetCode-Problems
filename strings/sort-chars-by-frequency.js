function freq(s) {
	let map = new Map();

	for (let char of s) {
		map.set(char, map.get(char) + 1 || 1);
	}

	const arr = Array.from(map);
	arr.sort((a, b) => b[1] - a[1]);
	const sortedMap = new Map(arr);
	let result = [];

	for (let [key, val] of sortedMap) {
		result.push(key.repeat(val));
		// for (let i = 0; i < val; i++) {
		// 	result += key;
		// }
	}

	return result.join('');

	console.log(result);
}

console.log(freq('tree'));
console.log(freq('cccaaa'));
console.log(freq('Aabb'));
