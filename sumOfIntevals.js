function isOverlap(a, b) {
    return a[0] < b[1] && b[0] < a[1];
}

function mergeOverlappingIntervals(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

var merge = function (intervals) {
    function isOverlap(a, b) {
        return a[0] < b[1] && b[0] < a[1];
    }
    const arr = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i] === null) continue;
        for (let j = 1; j < intervals.length; j++) {
            if (intervals[j] === null) continue;
            if (intervals[i] !== null && intervals[j] !== null && isOverlap(intervals[i], intervals[j])) {
                arr.push(mergeOverlappingIntervals(intervals[i], intervals[j]));
                intervals[i] = intervals[j] = null;
            }
        }
    };
    return arr;
}