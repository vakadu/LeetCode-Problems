function longestPalin(s) {
	let i = 0,
		d = s.length - 1,
		j = d;

	while (i < j) {
		if (isPalindrome(i, j, s)) {
			return s.slice(i, j + 1);
		}
		i++;
		j++;

		if (j === s.length) {
			i = 0;
			d--;
			j = d;
		}
	}
}

function isPalindrome(i, j, s) {
	while (i < j) {
		if (s[i] !== s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

console.log(longestPalin('babad'));
