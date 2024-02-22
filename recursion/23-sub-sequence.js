function subsequence(s, r) {

    if(s === "") {
        console.log(r);
        return;
    }

    let ch = s.charAt(0);
    let ascii = s.charCodeAt(0);

    subsequence(s.slice(1), r + ch);
    subsequence(s.slice(1), r);
    subsequence(s.slice(1), r + ascii)
}

function subsequence2(s, r) {
    if(s === "") {
        let arr = [];
        arr.push(r);
        return arr;
    }

    let ch = s.charAt(0);

    let left = subsequence2(s.slice(1), ch + r);
    let right = subsequence2(s.slice(1), r);

    return [...left, ...right]
}

subsequence("abc", "")
// console.log(subsequence2("abc", ""));
