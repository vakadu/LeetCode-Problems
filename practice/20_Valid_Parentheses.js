const keys = {
    ')': '(',
    ']': '[',
    '}': '{',
};

function valid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && keys[s[i]] === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }

    return !stack.length > 0;
}

console.log(valid('()[]{}'));
console.log(valid('([])'));
console.log(valid('([]'));
