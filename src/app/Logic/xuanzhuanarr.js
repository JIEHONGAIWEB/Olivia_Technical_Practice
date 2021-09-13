let rotate = (arr, k) => {
    let n = arr.length;
    let arrNew = new Array(n);
    for (let i = 0; i < n; ++i) {
        arrNew[(i + k) % n] = arr[i];
    }

    for (let i = 0; i < n; ++i) {
        arr[i] = arrNew[i]
    }

    return arr;
}
let result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log('result:', result)
