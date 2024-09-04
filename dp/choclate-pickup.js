function choclatePickup(grid) {
    return helper(grid, 0, 0, grid[0].length - 1);
}

function helper(grid, i, j1, j2) {
    if (i === grid.length) {
        if (j1 === j2) {
            return grid[i][j1];
        } else {
            return grid[i][j1] + grid[i][j2];
        }
    }

    if (j1 < 0 || j1 >= grid[0].length || j2 < 0 || j2 >= grid[0].length) {
        return -Infinity;
    }

    let max = Number.MAX_SAFE_INTEGER;

    for (let m = -1; m <= 1; m++) {
        let ans;
        for (let n = -1; n <= 1; n++) {
            if (j1 === j2) {
                ans = grid[i][j1] + helper(grid, i + 1, j1 + m, j2 + n);
            } else {
                ans =
                    grid[i][j1] +
                    grid[i][j2] +
                    helper(grid, i + 1, j1 + m, j2 + n);
            }
        }
        max = Math.max(max, ans);
    }

    return max;
}

console.log(
    choclatePickup([
        [3, 1, 1],
        [2, 5, 1],
        [1, 5, 5],
        [2, 1, 1],
    ])
);
