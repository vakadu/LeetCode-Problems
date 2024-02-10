function linearSearch(array, target) {
    console.log(find(array, target, 0)); 
    console.log(findIndex(array, target, 0)); 
    console.log(findAllIndex(array, target, 0, [])); 
}

function find(array, target, i) {
    if(i >= array.length - 1) {
        return false;
    }

    if(array[i] === target) {
        return true;
    } else {
        return find(array, target, i+1)
    }
}

function findIndex(array, target, i) {
    if(i >= array.length - 1) {
        return -1;
    }

    if(array[i] === target) {
        return i;
    } else {
        return findIndex(array, target, i+1)
    }
}

function findAllIndex(array, target, i, newArr) {
    if(i >= array.length - 1) {
        return [];
    }
    console.log(newArr);

    if(array[i] === target) {
        newArr.push(i);
    }
    findAllIndex(array, target, i+1, newArr)
}

linearSearch([3,2,1,2,18,9], 2)
