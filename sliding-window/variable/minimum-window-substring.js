function minimum(s, t) {


    let i=0, j=0, tmap = new Map(), min = s.length;

    for(let char of t) {
        tmap = tmap.set(char, tmap.get(char) + 1 || 1);
    }

    len = tmap.size();

    while(j<s.length) {

        if(tmap.get(s[j]) > 0) {
            len--;
        }

        tmap.set(s[j], tmap.get(s[j])-1);
        
        if(len === 0) {

            while(len === 0) {
                min = Math.min(min, j-i+1);

                if(tmap.has(s[i]) >= 0) {
                    len++;
                }

                tmap.set(s[i], tmap.get(s[i])+1);
                i++;
            }
            
            j++;
        } else {
            j++;
        }
    }

    console.log(min);
}

minimum("ADOBECODEBANC", "ABC");
