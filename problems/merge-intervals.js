function mergeIntervals(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);
    let res = [[intervals[0][0], intervals[0][0]]], startIndex=0;

    for(let [s,e] of intervals) {
        if(s <= res[startIndex][1]) {
            if(e > res[startIndex][1]) {
                res[startIndex][1] = e
            }
        } else {
            res.push([s,e]);
            startIndex++;
        }
    }

    return res;
}

console.log(mergeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]]));
