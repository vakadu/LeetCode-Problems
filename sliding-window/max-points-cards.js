function maxPoints(cardPoints, k) {
    let i = 0,
        j = 0,
        max = Number.MIN_SAFE_INTEGER,
        sum = 0;

    while (j < k) {
        sum += cardPoints[j];
        j++;
    }
    max = Math.max(max, sum);
    j = cardPoints.length - 1;
    while (j >= cardPoints.length - k) {
        sum -= cardPoints[k - 1 - i] - cardPoints[cardPoints.length - 1 - i];
        max = Math.max(max, sum);
        i++;
        j--;
    }

    // j = cardPoints.length - 1;

    // while (j >= cardPoints.length - k) {
    //     sum -= cardPoints[i];
    //     i++;
    //     sum += cardPoints[j];
    //     max = Math.max(max, sum);
    //     j--;
    // }

    return max;
}

console.log(maxPoints([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxPoints([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxPoints([2, 2, 2], 2));
console.log(maxPoints([1, 79, 80, 1, 1, 1, 200, 1], 3));
