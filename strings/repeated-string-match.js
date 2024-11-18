function repeated(a, b) {
    let str = '',
        count = 0;

    while (str.length < b.length) {
        str += a;
        count++;
    }

    if (str.includes(b)) {
        return count;
    }

    str += a;
    count++;

    console.log(str.includes(b));
}

console.log(repeated('abcd', 'cdabcdab'));
