//print 1 to n numbers using recursion

function printNumbers(n){
    var result = n <= 1 ? '1' : printNumbers(n-1) + n;
    console.log(result, 'res');
}

printNumbers(4);
