function kFreq(s, k) {
    let map = new Map();

    for (let char of s) {
        map.set(char, map.get(char) + 1 || 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) < k) {
            let left = kFreq(s.slice(0, i), k);
            let right = kFreq(s.slice(i + 1), k);
            return Math.max(left, right);
        }
    }

    return s.length;
}

console.log(kFreq('aaabb', 3));
// console.log(kFreq('ababbc', 2));
