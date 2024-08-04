function parenthesis(s) {
	let depth = 0,
		max = 0;

	for (let char of s) {
		if (char === '(') {
			depth++;
		}
		if (char === ')') {
			depth--;
		}
		max = Math.max(max, depth);
	}

	return max;
}

console.log(parenthesis('(1+(2*3)+((8)/4))+1'));
console.log(parenthesis('(1)+((2))+(((3)))'));
console.log(parenthesis('()(())((()()))'));
