function isomorphic(s,t) {
    let sMap = new Map(), tMap = new Map();

    for(let i=0; i<s.length; i++) {
        sMap.set(s[i], t[i]);
    }

    for(let i=0; i<t.length; i++) {
        tMap.set(t[i], s[i]);
    }

    for(let i=0; i<s.length; i++) {
        if(sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]) {
            return false;
        }
    }

    return true
}

console.log(isomorphic("egg", "add"));
console.log(isomorphic("foo", "bar"));
console.log(isomorphic("paper", "title"));
console.log(isomorphic("bbbaaaba", "aaabbbba"));
