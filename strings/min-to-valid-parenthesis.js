function min(s) {
    let stack = [],
        count = 0;
    for (let i = 0; i < s.length; i++) {
        count++;

        if (s[i] === '(') {
            stack.unshift(s[i]);
        } else {
            let top = stack.shift();
            if (top && s[i] !== top) {
                count -= 2;
            }
        }
    }

    return count;

    console.log(count);
}

console.log(min('())'));
console.log(min(')))'));
console.log(min('())))'));
console.log(min('(()))'));
