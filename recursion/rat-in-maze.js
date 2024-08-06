function recursion(arr) {
    // return helper(arr, 0, 0, '');
    let result = [];
    backTrack(arr, 0, 0, [], result);
    return result;
}

function backTrack(arr, row, col, temp, result) {
    if (row === arr.length - 1 && col === arr[row].length - 1) {
        result.push(temp.join(''));
        return;
    }

    if (row < arr.length - 1) {
        if (arr[row + 1][col]) {
            temp.push('D');
            backTrack(arr, row + 1, col, temp, result);
            temp.pop();
        }
    }

    if (col < arr[row].length - 1) {
        if (arr[row][col + 1]) {
            temp.push('R');
            backTrack(arr, row, col + 1, temp, result);
            temp.pop();
        }
    }
}

// function helper(arr, row, col, p) {
//     if (row === arr.length - 1 && col === arr[row].length - 1) {
//         return [p];
//     }

//     let result = [];

// if (row < arr.length - 1) {
//     if (arr[row + 1][col]) {
//         result = [...result, ...helper(arr, row + 1, col, p + 'D')];
//     }
// }

// if (col < arr[row].length - 1) {
//     if (arr[row][col + 1]) {
//         result = [...result, ...helper(arr, row, col + 1, p + 'R')];
//     }
// }

//     return result;
// }

console.log(
    recursion([
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1],
    ])
);
