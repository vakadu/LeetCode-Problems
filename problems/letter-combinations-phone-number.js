let combination = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9" : "wxyz"
};

function combinations(digits) {

    if(digits === "") {
        return []
    }

    return helper(digits, "")
}

function helper(digits, s) {
    if(digits === "") {
        return [s];
    }

    let first = digits[0], sliceFirst = digits.slice(1), result = [];

    for(let char of combination[first]) {
        let temp = combinations(sliceFirst, s+char);
        result.push(...temp);
    }

    return result
}

console.log(combinations("23"));
