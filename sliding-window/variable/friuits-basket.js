function basket(fruits) {
    let i=0, j=0, map = new Map(), max = 0;

    if(fruits.length === 1) {
        return 1
    }

    while(j<fruits.length) {
        map = map.set(fruits[j], map.get(fruits[j]) + 1 || 1);
        if(map.size === 2){
            max = Math.max(max, j-i+1)
            j++;
        } else if(map.size > 2) {
            while(map.size > 2) {
                map = map.set(fruits[i], map.get(fruits[i]) - 1);

                if(map.get(fruits[i]) <= 0) {
                    map.delete(fruits[i]);
                }

                i++;

            }
            j++;
        } else {
            j++;
        }
    }

    console.log(max);
}

basket([1,1]);
