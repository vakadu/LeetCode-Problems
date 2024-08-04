const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
};

function letterCombinations(digits) {
    if(digits.length <= 0) {
        return []
    }
    return helper(digits, "");
}

function helper(digits, p) {

    if(digits.length <= 0) {
        return [p];
    }

    let first = digits.charAt(0), firstChar = map[first], result = [];

    for(let i=0; i<firstChar.length; i++) {
        let combinations = helper(digits.slice(1), p+firstChar[i]);
        result.push(...combinations);
    }

    return result;
}

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations(""));
