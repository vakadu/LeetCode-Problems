//you will get a string and a target value, remove the target value from the string
//nad return the remaining value

function skipCharacter(str, t) {

    // return helper(str, t, "");
    // return helper2(str);

}

// with extra result
function helper(s, t, r) {
    if(s === "") {
        return r;
    }

    let last = s[s.length-1];
    if(last !== t) {
        r = last + r;
    }
    s = s.slice(0, s.length-1);

    return helper(s, t, r);
}

//modifying the same string
function helper2(s) {
    if(s === "") {
        return s;
    }

    let ch = s.charAt(0);

    if(ch === 'a') {
        return helper2(s.slice(1))
    } else {
        return ch + helper2(s.slice(1))
    }
}

// console.log(skipCharacter("baccd", "a"));

//skip a string

function skipaString(str, target) {

    if(str === "") {
        return str;
    }

    let ch = str.charAt(0);

    if(str.startsWith(target)) {
        return skipaString(str.slice(target.length), target)
    } else {
        return ch + skipaString(str.slice(1), target)
    }
}

//only skip the app if it is not equal to apple
function skipaString2(str, target) {

    if(str === "") {
        return str;
    }

    let ch = str.charAt(0);

    if(str.startsWith(target) && !str.startsWith("apple")) {
        return skipaString2(str.slice(target.length), target)
    } else {
        return ch + skipaString2(str.slice(1), target)
    }
}

console.log(skipaString("bcdappbh", "app"));
console.log(skipaString2("bcdapplebh", "app"));
