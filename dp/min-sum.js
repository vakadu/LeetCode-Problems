function minSum(grid) {
    return helper(0, 0, grid);
}

function helper(i, j, grid) {
    if (i === grid.length - 1 && j === grid[i].length - 1) {
        return grid[i][j];
    }

    if (i >= grid.length || j >= grid[0].length) {
        return Infinity;
    }

    let down = grid[i][j] + helper(i + 1, j, grid);
    let right = grid[i][j] + helper(i, j + 1, grid);

    return Math.min(down, right);
}

console.log(
    minSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ])
);
