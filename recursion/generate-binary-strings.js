function recursion(n, p) {
    if(n<=0) {
        return [p];
    }
    let result = [];

    result = result.concat(recursion(n-1, p+"0"));
    
    if(p[p.length-1] !== "1") {
        result = result.concat(recursion(n-1, p+"1"));

    }

    return result
}

console.log(recursion(3, ""));
console.log(recursion(4, ""));
