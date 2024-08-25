function maxPair(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let result = 1,
        lastPair = pairs[0][1];
    console.log(pairs);

    for (let i = 1; i < pairs.length; i++) {
        if (lastPair < pairs[i][0]) {
            result++;
            lastPair = pairs[i][1];
        }
    }

    return result;
}

console.log(
    maxPair([
        [1, 2],
        [2, 3],
        [3, 4],
    ])
);
console.log(
    maxPair([
        [1, 2],
        [7, 8],
        [4, 5],
    ])
);

console.log(
    maxPair([
        [-6, 9],
        [1, 6],
        [8, 10],
        [-1, 4],
        [-6, -2],
        [-9, 8],
        [-5, 3],
        [0, 3],
    ])
);
