function generate(n) {
    return helper(n, n, '');
}

function helper(i, j, p) {
    let result = [];
    if (i === 0 && j == 0) {
        return [p];
    }

    if (i > 0) {
        result = result.concat(helper(i - 1, j, p + '('));
    }
    if (j > 0 && i < j) {
        result = result.concat(helper(i, j - 1, p + ')'));
    }

    return result;
}

console.log(generate(3));
