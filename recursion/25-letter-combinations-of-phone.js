const keyboard = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
}

function letterCombinations(digits, str) {

    if(digits.length === 0) return [];

    const res = [];
    const letters = keyboard[digits[0]];
    for (let i = 0; i < letters.length; i++) {
        if (digits.length == 1){
            res.push(str+letters[i])
        }else{
            const comb = letterCombinations(digits.slice(1),str + letters[i]);
            res.push(...comb); // Spread the nested arrays into the main array
        }
    }
    return res

}

letterCombinations("23", "")
