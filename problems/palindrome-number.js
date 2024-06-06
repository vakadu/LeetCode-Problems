function palindromeNumber(x) {
	let s = x.toString(),
		i = 0,
		j = s.length - 1;

	while (i < j) {
		if (s[i] != s[j]) {
			return false;
		}
		i++;
		j--;
	}

	return true;
}

console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));
console.log(palindromeNumber(10));
