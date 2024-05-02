function fibonacci(n) {
    if(n < 2) {
        return n
    }
    const result = fibonacci(n-1) + fibonacci(n-2);
    console.log(result);
    return result;

}

fibonacci(4);
