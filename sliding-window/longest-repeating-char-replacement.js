function longest(s, k) {
    // let max = Number.MIN_SAFE_INTEGER;

    // for (let i = 0; i < s.length; i++) {
    //     let map = new Map(),
    //         maxFreq = 0;
    //     for (let j = i; j < s.length; j++) {
    //         map.set(s[j], map.get(s[j]) + 1 || 1);
    //         maxFreq = Math.max(maxFreq, map.get(s[j]));
    //         let changes = j - i + 1 - maxFreq;

    //         if (changes <= k) {
    //             max = Math.max(max, j - i + 1);
    //         }
    //     }
    // }

    // return max;

    let i = 0,
        j = 0,
        max = Number.MIN_SAFE_INTEGER,
        map = new Map(),
        maxFreq = 0;

    while (j < s.length) {
        map.set(s[j], map.get(s[j]) + 1 || 1);
        maxFreq = Math.max(maxFreq, map.get(s[j]));
        let changes = j - i + 1 - maxFreq;

        if (changes > k) {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
        }
        max = Math.max(max, j - i + 1);

        j++;
    }

    return max;
}

// console.log(longest('AABABBA', 1));
console.log(longest('ABAB', 2));
