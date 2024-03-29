function groupAnangram(strs) {
    let map = new Map();

    for(let str of strs) {
        let word = str.split('').sort().join('');

        if(map.has(word)) {
            map.get(word).push(str)
        } else {
            map.set(word, [str]);
        }
    }

    console.log(Array.from(map.values()), map.values());
}

groupAnangram(["eat","tea","tan","ate","nat","bat"]);
