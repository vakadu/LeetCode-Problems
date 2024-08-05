function countSub(s, k) {
    let count = 1,
        i = 0,
        map = new Map();

    for (let j = 0; j < s.length; j++) {
        map.set(s[j], map.get(s[j]) + 1 || 1);

        while (map.size > k) {
            map.set(s[i], map.get(s[i]) - 1);

            if (map.get(s[i]) === 0) {
                map.delete(s[i]);
            }
            i++;
        }

        if (map.size === k) {
            count++;
        }
    }

    return count;
}

console.log(countSub('abaaca', 1));
console.log(countSub('aba', 2));
