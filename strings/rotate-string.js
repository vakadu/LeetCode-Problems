function rotateStr(s, goal) {
    for(let i=0; i<s.length; i++) {
        let s1 = s.slice(i+1)+s.slice(0,i+1);
        if(s1 === goal){
            return true
        }
    }

    return false;
}

console.log(rotateStr("abcde", "cdeab"));
console.log(rotateStr("abcde", "abced"));
