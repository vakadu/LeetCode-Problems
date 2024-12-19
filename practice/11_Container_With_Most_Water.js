function mostWater(height) {
    let max = 0,
        i = 0,
        j = height.length - 1;

    while (i < j) {
        const min = Math.min(height[i], height[j]);
        const width = j - i;
        max = Math.max(max, min * width);
        if (height[i] <= height[j]) {
            // let temp = height[i] * (j - i);
            // max = Math.max(max, temp);
            i++;
        } else {
            // let temp = height[j] * (j - i);
            // max = Math.max(max, temp);
            j--;
        }
    }

    return max;
}

// console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(mostWater([1, 1]));
console.log(mostWater([1, 2, 4, 3]));
