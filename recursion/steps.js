function steps(n) {
    const result = helper(n, 0, 0, '');
    return result;
}

function helper(n, row, col, p) {
    if (row === n) {
        return [];
    }

    if (col <= row) {
        return helper(n, row, col + 1, (p += '#'));
    } else {
        // result.push(p);
        // return helper(n, row + 1, 0, '');
        return [p].concat(helper(n, row + 1, 0, ''));
    }
}

console.log(steps(4));
