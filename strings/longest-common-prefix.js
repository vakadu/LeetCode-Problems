function longestCommon(strs) {
    let str = "";

    for(let i=0; i<strs[0].length; i++) {
        for(let j=1; j<strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return str;
            }
        }
        str+=strs[0][i];
    }

    return "";
}

console.log(longestCommon(["flower","flow","flight"]));
console.log(longestCommon(["dog","racecar","car"]));
