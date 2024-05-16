function canConstruct(str, arr, memo = {}) {
    if(str in memo) {
        return memo[str]
    }
    if(str === "") {
        return true;
    }

    for(let word of arr) {
        if(str.indexOf(word) === 0) {
            let suffix = str.slice(word.length);

            if(canConstruct(suffix, arr, memo) === true) {
                memo[str] = true;
                return true;
            }
        }
    }

    memo[str] = false;
    return false

}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
