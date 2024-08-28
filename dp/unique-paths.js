function paths(m, n) {
    return helper(m, n, 0, 0);
}

function helper(m, n, i, j, memo = {}) {
    let key = `${i}-${j}`;

    if (key in memo) {
        return memo[key];
    }

    if (i === m - 1 && j === n - 1) {
        return 1;
    }

    if (i >= m || j >= n) {
        return 0;
    }

    let downPaths = helper(m, n, i + 1, j, memo);
    let rightPaths = helper(m, n, i, j + 1, memo);

    let result = downPaths + rightPaths;
    memo[key] = result;
    return result;
}

console.log(paths(3, 2));
