function longest(s) {
    if (s === '') {
        return 0;
    }

    let i = 0,
        j = 0,
        count = Number.MIN_SAFE_INTEGER,
        map = new Map();

    while (j < s.length) {
        map.set(s[j], map.get(s[j]) + 1 || 1);

        if (map.get(s[j]) > 1) {
            while (map.get(s[j]) > 1) {
                map.set(s[i], map.get(s[i]) - 1);
                i++;
            }

            j++;
        } else {
            count = Math.max(count, j - i + 1);
            j++;
        }

        // let check = checkStr(map);
        // if (check) {
        //     count = Math.max(count, j - i + 1);
        //     j++;
        // } else {
        //     map.set(s[i], map.get(s[i]) - 1);

        //     if (map.get(s[i]) <= 0) {
        //         map.delete(s[i]);
        //     }
        //     i++;
        //     j++;
        // }
    }

    return count;
}

function checkStr(map) {
    let see = [...map.values()].every((v) => {
        return v === 1;
    });
    return see;
}

console.log(longest('abcabcbb'));
console.log(longest('bbbb'));
console.log(longest('pwwkew'));
