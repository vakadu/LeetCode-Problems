function group(strs) {
    let map = new Map(), result=[];

    for(let str of strs) {
        let tempStr = str.split('').sort().join('');

        if(map.has(tempStr)) {
            map.set(tempStr, [...map.get(tempStr), str])
        } else {
            map.set(tempStr, [str])
        }
    }

    for(let [key, val] of map) {
        result.push(val);
    }

    return result
}

console.log(group(["eat","tea","tan","ate","nat","bat"]));
