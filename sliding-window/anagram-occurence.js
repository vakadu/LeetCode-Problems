function anagramOccurence(s, p) {
    let i=0, j=0, result=[], count = 0, map = new Map(), len = p.length;

    for(let char of p) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    while(j<s.length) {
        console.log(i, j, len, count);
        if(map.get(s[j]) > 0) {
            len--;
        }

        map.set(s[j], map.get(s[j]) - 1);

        if(len === 0) {
            count++;
            result.push(i);
        }
        console.log(i, j, len, count);

        if(j-i+1 === p.length) {

            if(map.get(s[i]) >= 0) {
                len++;
            }
            map.set(s[i], map.get(s[i]) + 1);
            
            i++;
            j++;

        } else {
            j++;
        }
        
    }

    console.log(count, result);
}

function checkAnagram(row, col, t, m) {
    let temp = t.slice(row, col+1), map = new Map(m);
    for(char of temp) {
        if(map.has(char) && map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
        }
        
        if(map.has(char) && map.get(char) <= 0) {
            map.delete(char);
        }
    }

    return map.size <=0 ? true : false;
}

anagramOccurence("cbaebabacd", "abc");
