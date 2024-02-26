// p -> processed
// up -> unprocessed

function permutations(p, up) {

    if(up==="") {
        console.log(p);
        return;
    }

    let ch = up.charAt(0);

    for(let i=0; i<= p.length; i++) {
        let f = p.slice(0, i);
        let l = p.slice(i, p.length);

        permutations(f + ch + l, up.slice(1));
    }

}

function permutations2(p, up) {
    if(up==="") {
        return [p];
    }

    let ch = up.charAt(0);
    let result = [];

    for(let i=0; i<= p.length; i++) {
        let f = p.slice(0, i);
        let l = p.slice(i, p.length);

        let ans = permutations2(f + ch + l, up.slice(1));
        result.push(...ans);
        // result = result.concat(ans) //we can use concat also
    }
    return result
}

// permutations("", "abc")
console.log(permutations2("", "abc"));
