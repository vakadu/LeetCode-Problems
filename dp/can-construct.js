function canConstruct(str, arr, memo = {}) {
	if (str in memo) {
		return memo[str];
	}
	if (str === '') {
		return true;
	}

	for (let word of arr) {
		if (str.indexOf(word) === 0) {
			let suffix = str.slice(word.length);

			if (canConstruct(suffix, arr, memo) === true) {
				memo[str] = true;
				return true;
			}
		}
	}

	memo[str] = false;
	return false;
}

function tabulation(target, words) {
	let arr = new Array(target.length + 1).fill(false);
	arr[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (arr[i]) {
			for (let word of words) {
				let temp = target.slice(i, i + word.length);
				if (temp === word) {
					arr[i + word.length] = true;
				}
			}
		}
	}
}

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(tabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
