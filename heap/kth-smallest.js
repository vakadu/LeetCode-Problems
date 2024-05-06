// Given an array arr[] of size N and a number K, where K is smaller than the size 
// of the array. Find the K’th smallest element in the given array. Given that all 
// array elements are distinct.

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
// Output: 10 

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function kSmallest(arr, k) {
    let result = [], queue = new MaxPriorityQueue();

    for(let i=0; i<arr.length; i++) {
        result.push(arr[i]);
        queue.push(arr[i]);

        if(queue.size() > k) {
            result.pop();
            queue.pop();
        }
    }

    console.log(queue.front());

}

kSmallest([7, 10, 4, 3, 20, 15], 4);
