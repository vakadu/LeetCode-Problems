function hello(n) {
    if(n === 0) {
        return
    }

    console.log('hello');
    return hello(n-1)
}

hello(5)
