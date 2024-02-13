function bubbleSort(arr) {
    let found = false;

    for(let i=0; i<arr.length; i++) {

        for(let j=1; j<arr.length - i; j++) {

            if(arr[j] < arr[j-1]) {
                found = true;
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }

        }

        if(!found) {
            break;
        }

    }
    console.log(arr);

}

bubbleSort([1,4,2,5,3]);
