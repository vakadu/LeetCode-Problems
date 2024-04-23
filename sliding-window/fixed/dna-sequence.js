function dnaSeq(seq) {
    let i=0, j=10, map = new Map(), result = [];

    while(j<=seq.length) {
        let temp = seq.slice(i, j);

        if(map.has(temp)) {
            map.set(temp, map.get(temp) + 1)
        } else {
            map.set(temp, 1);
        }

        i++;
        j++;
    }

    for([key, val] of map) {
        if(val > 1) {
            result.push(key);
        }
    }

    console.log(result);
}

dnaSeq("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
