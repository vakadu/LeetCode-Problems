function lcp(strs) {
    let result = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i]) {
                continue;
            } else {
                return result;
            }
        }
        result += strs[0][i];
    }

    return result;
}

console.log(lcp(['flower', 'flow', 'flight']));
console.log(lcp(['dog', 'racecar', 'car']));
