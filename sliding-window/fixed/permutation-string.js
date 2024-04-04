function permutationStr(s1, s2) {
    let i=0, j=0, len=s1.length, s1Map = new Map();

    for(let char of s1) {
        s1Map.set(char, s1Map.get(char) + 1 || 1);
    }

    while(j<s2.length) {
        if(s1Map.get(s2[j]) > 0) {
            len--;
        }
        s1Map.set(s2[j], s1Map.get(s2[j]) - 1);


        if(j-i+1 === s1.length) {

            if(len === 0) {
                console.log("found");
                return true;
            }

            if(s1Map.get(s2[i]) >= 0) {
                len++;
            }

            s1Map.set(s2[i], s1Map.get(s2[i]) + 1)



            i++;
            j++;
        } else {
            j++;
        }
    }

}

permutationStr("adc", "dcda");
