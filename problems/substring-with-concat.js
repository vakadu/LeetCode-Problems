function findSubstring(s, words) {
    let perms = getPerms(words,""), i=0,j=perms[0].length, result=[]; 
    while(j<=s.length) {
        let str = s.slice(i,j);
        let check = perms.includes(str);
        if(check) {
            result.push(i)
        }
        i++;
        j++;
    }

    return result
}

function getPerms(words, p) {
    if(words.length === 0) {
        return [p]
    }
    let result=[];

    for(let i=0; i<words.length; i++) {
        let char = words[i], remaining = words.slice(0, i).concat(words.slice(i + 1));;
        let permutation = getPerms(remaining, p+char);
        result.push(...permutation);
    }
    return result;
}

// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
// console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));
// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]));
