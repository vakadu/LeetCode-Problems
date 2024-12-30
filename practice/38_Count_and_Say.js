function count(n) {
    return helper(n, 1, '1');
}

function helper(n, start, p) {
    let count = 1,
        temp = '';

    if (start >= n) {
        return p;
    }

    for (let index = 0; index < p.length; index++) {
        if (p[index] === p[index + 1]) {
            count++;
        } else {
            temp += `${count}${p[index]}`;
            count = 1;
        }
    }

    return helper(n, start + 1, temp);
}

console.log(count(4));
