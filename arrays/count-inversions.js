function count(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                total++;
            }
        }
    }

    return total;
}

console.log(count([2, 4, 1, 3, 5]));
