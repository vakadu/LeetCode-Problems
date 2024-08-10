function missing(arr) {
    let map = new Map(),
        result = [],
        max = Math.max(...arr),
        count = 0;

    for (num of arr) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for (let i = 1; i <= max; i++) {
        if (!map.has(i)) {
            result[0] = i;
        } else if (map.has(i) > 1) {
            result[1] = i;
        }
    }

    return result;
}

console.log(missing([2, 2]));
console.log(missing([1, 3, 3]));
