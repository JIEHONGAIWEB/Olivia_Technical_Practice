var rotate = function (nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; ++i) {
        newArr[(i + k) % n] = nums[i];
      console.log(333,(i + k) % n)
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = newArr[i];
    }

    return nums;
};

let result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log('result:', result)
