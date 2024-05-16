function countConstruct(target, words, memo = {}) {

    if(memo in target) {
        return memo[target];
    }

    if(target === "") {
        return 1
    }
    let total = 0;

    for(let word of words) {
        if(target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let result = countConstruct(suffix, words, memo);
            total += result;
        }
    }

    memo[target] = total;
    return total;

}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
