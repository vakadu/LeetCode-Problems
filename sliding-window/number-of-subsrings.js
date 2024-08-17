function substr(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let temp = s.slice(i, j + 1);
            if (
                temp.includes('a') &&
                temp.includes('b') &&
                temp.includes('c')
            ) {
                count++;
            }
        }
    }
    return count;
}

console.log(substr('aaacb'));
console.log(substr('abcabc'));
console.log(substr('abc'));
