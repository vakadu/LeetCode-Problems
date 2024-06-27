function permutations(words, p) {
    if(words.length <= 0) {
        return p
    }

    let result = [];
    let ch = words[0];


    for(let i=0; i<words.length; i++) {
        console.log(words.slice(0, i).concat(words.slice(i + 1)));
        // let permutaions = permutations(words.slice(1), fd);
        // result.push(permutaions);
    }

    return result
}

console.log(permutations(["a","b","c"],""));
