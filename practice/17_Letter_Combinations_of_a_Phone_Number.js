const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

function combinations(digits) {
    if (digits.length <= 0) {
        return [];
    }

    return helper(digits, '');
}

function helper(digits, s) {
    if (digits.length <= 0) {
        return [s];
    }

    let firstChar = digits.charAt(0),
        letter = letters[firstChar],
        result = [];

    for (let i = 0; i < letter.length; i++) {
        let combination = helper(digits.slice(1), s + letter[i]);
        result.push(...combination);
    }

    return result;
}

console.log(combinations('23'));
