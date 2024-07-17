function oddNumber(num) {
    for(let i=num.length-1; i>=0; i--) {
        if(parseInt(num[i]) % 2 === 1) {
            return num.slice(0, i+1)
        }
    }
}

console.log(oddNumber("35427"));
console.log(oddNumber("52"));
console.log(oddNumber("10133890"));
console.log(oddNumber("239537672423884969653287101"));
