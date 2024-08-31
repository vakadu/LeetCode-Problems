function uniquePaths(obstacleGrid) {
    let grid = new Array(obstacleGrid.length)
        .fill(-1)
        .map(() => new Array(obstacleGrid[0].length).fill(-1));

    console.log(grid);

    return helper(obstacleGrid, 0, 0, grid);
}

function helper(matrix, i, j, grid) {
    let m = matrix.length,
        n = matrix[0].length;

    console.log(grid);

    if (grid[i][j] !== -1) {
        return grid[i][j];
    }

    if (matrix[i][j] === 1) {
        return 0;
    }

    if (i === m - 1 && j === n - 1) {
        return 1;
    }

    let down = i < m - 1 && helper(matrix, i + 1, j, grid);
    let right = j < n - 1 && helper(matrix, i, j + 1, grid);

    let result = down + right;
    grid[i][j] = result;
    return result;
}

// console.log(
//     uniquePaths([
//         [0, 0, 0],
//         [0, 1, 0],
//         [0, 0, 0],
//     ])
// );

// console.log(
//     uniquePaths([
//         [0, 1],
//         [0, 0],
//     ])
// );

// console.log(
//     uniquePaths([
//         [0, 0],
//         [0, 1],
//     ])
// );

console.log(uniquePaths([[0, 0]]));
