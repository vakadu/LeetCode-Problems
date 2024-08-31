function minimumTotal(triangle) {
    let memo = new Map();
    return helper(0, 0, triangle, memo);
}

function helper(i, j, triangle, memo) {
    let key = `${i}-${j}`;

    if (key in memo) {
        return memo[key];
    }

    if (i === triangle.length - 1) {
        return triangle[i][j];
    }

    let left = helper(i + 1, j, triangle, memo);
    let right = helper(i + 1, j + 1, triangle, memo);

    let result = triangle[i][j] + Math.min(left, right);
    memo[key] = result;
    return result;
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
