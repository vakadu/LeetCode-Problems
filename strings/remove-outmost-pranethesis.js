const parenthesis = { '(': ')' };

function remove(s) {
	let stack = [],
		result = [],
		resultStr = '';

	for (let index = 0; index <= s.length; index++) {
		if (stack.length === 0) {
			result.push(index);
		}

		if (s[index] in parenthesis) {
			stack.push(s[index]);
		} else {
			stack.pop();
		}
	}

	for (i = 0; i < result.length; i++) {
		let str = s.slice(result[i], result[i + 1]);
		resultStr += str.slice(1, str.length - 1);
	}

	return resultStr;
}

console.log(remove('(()())(())'));
console.log(remove('(()())(())(()(()))'));
console.log(remove('()()'));
