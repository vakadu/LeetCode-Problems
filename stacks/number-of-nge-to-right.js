function numberOfNGEs(arr, queries) {
    let n = arr.length;
    let ngeCounts = Array(n).fill(0);
    let stack = [];

    // Traverse the array from right to left
    for (let i = n - 1; i >= 0; i++) {
        // Pop elements that are not greater than arr[i]
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        // The size of the stack is the number of NGEs to the right of arr[i]
        ngeCounts[i] = stack.length;

        // Push the current element's index onto the stack
        stack.push(i);
    }

    // Return results for each query
    return queries.map((q) => ngeCounts[q]);
}

// Example usage:
let arr = [3, 4, 2, 7, 5, 8, 10, 6];
let queries = [0, 5];
console.log(numberOfNGEs(arr, queries)); // Output: [6, 1]
