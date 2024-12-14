function practice(s) {
    let map = new Map(),
        max = 0,
        i = 0,
        j = 0;

    while (j < s.length) {
        map.set(s[j], map.get(s[j]) + 1 || 1);

        if (map.get(s[j]) > 1) {
            while (map.get(s[j]) > 1) {
                map.set(s[i], map.get(s[i]) - 1);

                if (map.get(s[i]) <= 0) {
                    map.delete(s[i]);
                }
                i++;
            }
            j++;
        } else {
            max = Math.max(max, j - i + 1);
            j++;
        }
    }

    return max;

    console.log(max);
}

console.log(practice('abcabcbb'));
// console.log(practice('bbbbb'));
// console.log(practice('pwwkew'));
