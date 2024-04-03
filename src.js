function binary_search(arr, search) {
    let start = 0, end = search.length;
    while(start !== end) {
        let mid = Math.floor((start + end) / 2);
        if(search >= arr[mid]) {
            start = mid;
        }
        else {
            end = mid - 1;
        }
    }
    return start;
}