function allConstruct(target, words, memo = {}) {
	if (target in memo) {
		return target[memo];
	}
	if (target === '') {
		return [[]];
	}
	let combinations = [];

	for (let word of words) {
		if (target.indexOf(word) === 0) {
			let suffix = target.slice(word.length);
			let suffixWays = allConstruct(suffix, words);
			let targetWays = suffixWays?.map((way) => [word, ...way]);
			combinations.push(...targetWays);
		}
	}
	console.log(combinations);

	memo[target] = combinations;

	return combinations;
}

function tabulation(target, words) {
	let table = new Array(target.length + 1).fill().map(() => []);
	table[0] = [[]];

	for (let i = 0; i <= target.length; i++) {
		for (let word of words) {
			if (target.slice(i, i + word.length) === word) {
				const newCom = table[i].map((sub) => [...sub, word]);
				table[i + word.length].push(...newCom);
			}
		}
	}

	console.log(table);
}

console.log(tabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
