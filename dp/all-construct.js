function allConstruct(target, words, memo = {}) {
    if(target in memo) {
        return target[memo]
    }
    if(target === "") {
        return [[]];
    }
    let combinations = [];

    for(let word of words) {
        if(target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, words);
            let targetWays = suffixWays?.map(way => [word, ...way]);
            combinations.push(...targetWays)

        }
    }

    memo[target] = combinations;

    return combinations
}

allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
