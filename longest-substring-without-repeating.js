function substring(s) {
	let max = 0,
		map = new Map(),
		j = 0,
		i = 0;

	while (j < s.length) {
		map.set(s[j], map.get(s[j]) + 1 || 1);

		if (map.get(s[j]) > 1) {
			while (map.get(s[j]) > 1) {
				map.set(s[i], map.get(s[i]) - 1);
				i++;
			}
			j++;
		} else {
			max = Math.max(max, j - i + 1);
			j++;
		}
	}

	console.log(max);

	// let result = 0;

	// for (let i = 0; i < s.length; i++) {
	// 	for (let j = i + 1; j < s.length; j++) {
	// 		if (s[i] === s[j]) {
	// 			result = Math.max(result, j - 1 - i + 1);
	// 			break;
	// 		} else {
	// 			result = Math.max(result, j - 1 - i + 1);
	// 		}
	// 	}
	// }

	// let result = 0,
	// 	map = new Map();

	// for (let i = 0; i < s.length; i++) {
	// 	let temp = 0;

	// 	map.set(s[i], map.get(s[i]) + 1 || 1);

	// 	for (let [key, val] of map) {
	// 		if (val > 1) {
	// 			map.clear();
	// 			map.set(key, map.get(key) + 1 || 1);
	// 		} else {
	// 			temp += val;
	// 			result = Math.max(result, temp);
	// 		}
	// 	}
	// }
}

substring('abcabcbb');
substring('pwwkew');
substring('dvdf');
substring('bbbb');
