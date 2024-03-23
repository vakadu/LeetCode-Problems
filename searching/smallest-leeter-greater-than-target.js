function smallestLetter(letters, target) {

    let start = 0, end = letters.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(target < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    console.log(start, end);

    if(start === letters.length) {
        return letters[0];
    } else {
        return letters[start]
    }

    
}

console.log(smallestLetter(["x","x","y","y"], "z"));
