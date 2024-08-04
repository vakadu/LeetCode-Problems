function anagram(s, t) {

    if (s.length !== t.length) {
        return false;
    }
    
    let sMap = new Map();

    for(let char of s) {
        sMap.set(char, sMap.get(char) + 1 || 1);
    }

    for(let char of t) {
        sMap.set(char, sMap.get(char) > 0 ? sMap.get(char) -1 : 0);
    }
    console.log(sMap);

    let sum = Array.from(sMap.values()).reduce((acc, curr) => {
        return acc += curr;
    }, 0)

    return sum === 0;
}

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("aacc", "ccac"));
console.log(anagram("a", "ab"));
