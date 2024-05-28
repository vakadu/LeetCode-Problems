function nextAlpha(s, target) {
	let start = 0,
		end = s.length - 1,
		result = '#';

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (s[mid] === target) {
			start = mid + 1;
		} else if (s[mid] < target) {
			start = mid + 1;
		} else {
			result = s[mid];
			end = mid - 1;
		}
	}
	return result;
}

function nextAlphaArr(s, target) {
	let start = 0,
		end = s.length - 1,
		result = s[0];

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (s[mid] === target) {
			start = mid + 1;
		} else if (s[mid] < target) {
			start = mid + 1;
		} else {
			result = s[mid];
			end = mid - 1;
		}
	}
	return result;
}

// console.log(nextAlpha('acfg', 'c'));
console.log(nextAlphaArr(['c', 'f', 'j'], 'a'));
