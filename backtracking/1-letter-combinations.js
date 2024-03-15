const map = {
    "2": 'abc',
    "3": 'def',
    "4": 'ghi',
    "5": 'jkl',
    "6": 'mno',
    "7": 'pqrs',
    "8": 'tuv',
    "9": 'wxyz',
};

function letterCombination(letter, str) {
    if(letter.length === 0) {
        console.log(str);
        return [];
    }

    let ch = letter.charAt(0);
    let letters = map[ch];
    const res = [];

    for(let i=0; i<letters.length; i++) {
        if(letter.length === 1) {
            res.push(str + letters[i]);
        } else {
            let result = letterCombination(letter.slice(1), str + letters[i]);
            res.push(...result);
    
        }
    }

    console.log(res);

    return res;
}

letterCombination("234", "");
