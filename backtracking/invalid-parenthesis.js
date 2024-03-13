function invalidParenthesis(s) {
    let result = [];
    const minInvalid = numberOfInvalidParenthesis(s);
    helper(s, minInvalid, result);
    return result;
}

function helper(s, min, result) {
    if (min === 0 && isValid(s)) {
        result.push(s);
        return;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === ')') {
            const left = s.slice(0, i);
            const right = s.slice(i + 1);
            helper(left + right, min - 1, result);
        }
    }
}

function isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false; // Unmatched closing parenthesis
            }
        }
    }

    return stack.length === 0; // Check if all opening parentheses are matched
}

function numberOfInvalidParenthesis(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(')');
            }
        }
    }

    return stack.length;
}

console.log(invalidParenthesis("()())()"));
