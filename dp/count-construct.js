function countConstruct(target, words, memo = {}) {
	if (memo in target) {
		return memo[target];
	}

	if (target === '') {
		return 1;
	}
	let total = 0;

	for (let word of words) {
		if (target.indexOf(word) === 0) {
			let suffix = target.slice(word.length);
			let result = countConstruct(suffix, words, memo);
			total += result;
		}
	}

	memo[target] = total;
	return total;
}

function tablation(target, words) {
	let table = new Array(target.length + 1).fill(0);
	table[0] = 1;

	for (let i = 0; i <= target.length; i++) {
		for (let word of words) {
			let temp = target.slice(i, i + word.length);
			if (temp === word) {
				table[i + word.length] += table[i];
			}
		}
	}
	console.log(table);
}

console.log(tablation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(tablation('purple', ['purp', 'p', 'ur', 'le', 'puprl']));
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
