//check if the given arr is sorted or not
//return true if its sorted


function sortedArray(arr) {
    console.log(helper(arr, 0));
}

function helper(array, i) {
    if(i === array.length - 1) {
        return true;
    }

    return array[i] < array[i+1] && helper(array, i+1)
}

sortedArray([1,2,4,7])
