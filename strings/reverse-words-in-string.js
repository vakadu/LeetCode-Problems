function reverse(s) {
	// let stack = [],
	// 	str = s.split(' ');

	// while (str.length > 0) {
	// 	stack.push(str.pop());
	// }
	// stack.push(str);
	// return stack.join(' ');

	s = s
		.trim()
		.split(' ')
		.filter((e) => e !== '')
		.reverse()
		.join(' ');

	return s;

	console.log(s);
}

console.log(reverse('the sky is blue'));
console.log(reverse('  hello world  '));
console.log(reverse('a good   example'));
