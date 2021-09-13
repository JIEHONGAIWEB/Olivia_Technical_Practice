// 二分查找
let arr = [-1, 0, 3, 5, 7, 9, 10, 12];
let target = 2;
let erfen = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low;
        let num = arr[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return '';

}

let result = erfen(arr, target);
console.log('Result:', result)