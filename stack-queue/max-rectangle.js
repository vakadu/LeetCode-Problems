function maxRect(matrix) {
    let result = [];
    for(let i=0; i<matrix.length; i++) {
        let row = matrix[i], newRow = [];

        if(i>0) {
            let prevRow = result[i-1];
            for(let j=0; j<row.length; j++) {
                let temp = parseInt(row[j]) + parseInt(prevRow[j]);
                newRow.push(temp);
            }

        } else {
            newRow = row.map(Number);
        }
        result.push(newRow);

        let left = nsl(newRow), right = nsr(newRow), width = area(left, right);

        for(let i=0; i<heights.length; i++) {
            max = Math.max(max, width[i] * heights[i]);
        }
        
        console.log(width);
    }

    console.log(result);
}

function nsl(arr) {
    let stack = [], result = [];
    for(let i=0; i<arr.length; i++) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0].el > arr[i]) {
            while(stack.length > 0 && stack[0].el > arr[i]) {
                stack.shift();
            }

            if(stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[0].i);
            }
        } else {
            result.push(stack[0].i);
        }

        stack.unshift({ el: arr[i], i });
    }

    return result;
}

function nsr(arr) {
    let stack = [], result = [];

    for(let i=arr.length-1; i>=0; i--) {
        if(stack.length === 0) {
            result.push(arr.length);
        } else if(stack.length > 0 && stack[0].el > arr[i]) {
            while(stack.length > 0 && stack[0].el > arr[i]) {
                stack.shift();
            }

            if(stack.length === 0) {
                result.push(arr.length);
            } else {
                result.push(stack[0].i);
            }
        } else {
            result.push(stack[0].i)
        }

        stack.unshift({ el: arr[i], i });
    }

    return result.reverse();
}

function area(l, r) {
    let result= [];
    for(let i=0; i<l.length; i++) {
        let temp = r[i] - l[i] - 1;
        result.push(temp);
    }

    return result;
}

maxRect([["0","1","1","0"],["1","1","1","1"],["1","1","1","1"],["1","1","0","0"]]);
