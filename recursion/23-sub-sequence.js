function subsequence(s, r) {

    if(s === "") {
        console.log(r);
        return;
    }

    let ch = s.charAt(0);

    subsequence(s.slice(1), r + ch);
    subsequence(s.slice(1), r)

}

subsequence("ab", "");
