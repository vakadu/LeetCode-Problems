function fib(n) {

    if(n<2) {
        return n;
    }

    return fib(n-1) + fib(n-2);

}

function dpFib() {
    let cahce = {};

    return function fibCache(n)  {
        if(n in cahce) {
            return cahce[n]
        } else if(n < 2) {
            return n;
        } else {
            cahce[n] = fibCache(n-1) + fibCache(n-2);
    
            return cahce[n]
        }
    }
}

const fibs = dpFib();
// console.log(fibs(6));

function tabular(n) {
    let m = new Array(n).fill(-1);
    m[0] = 0, m[1] = 1;

    for(let i=2; i<n; i++) {
        m[i] = m[i-1] + m[i-2];
    }
    console.log(m[n-1]);
}

console.log(tabular(6));
