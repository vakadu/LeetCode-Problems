function leaders(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr.slice(i + 1),
            max = arr[i];
        max = Math.max(max, ...temp);
        if (max === arr[i]) {
            result.push(max);
        }
    }

    return result;
}

console.log(leaders([16, 17, 4, 3, 5, 2]));
console.log(leaders([10, 4, 2, 4, 1]));
console.log(leaders([5, 10, 20, 40]));
console.log(leaders([30, 10, 10, 5]));
