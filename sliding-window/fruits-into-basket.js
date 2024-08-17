function fruits(fruits) {
    let i = 0,
        j = 0,
        max = Number.MIN_SAFE_INTEGER,
        map = new Map();

    while (j < fruits.length) {
        map.set(fruits[j], map.get(fruits[j]) + 1 || 1);

        if (map.size > 2) {
            while (map.size > 2) {
                map.set(fruits[i], map.get(fruits[i]) - 1);

                if (map.get(fruits[i]) <= 0) {
                    map.delete(fruits[i]);
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
}

console.log(fruits([1, 2, 1]));
console.log(fruits([1, 2, 3, 2, 2]));
console.log(fruits([0, 1, 2, 2]));
