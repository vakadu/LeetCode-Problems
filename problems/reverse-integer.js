function reverseInteger(x) {
	let min = -1 * Math.pow(2, 31),
		max = Math.pow(2, 31) - 1,
		s = Math.sign(x) * parseInt(x.toString().split('').reverse().join(''));

	if (s < max && s > min) {
		return s;
	} else {
		return 0;
	}
}

console.log(reverseInteger(-123));
