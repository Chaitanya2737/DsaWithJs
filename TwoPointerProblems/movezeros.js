let nums = [0,1,0,3,12];

let left =0;
let right =nums.length - 1;
// Two Pointer Approach
// while (left <right) {
//     if (array[left] === 0) {
//         [array[left] ,array[right] ] = [array[right],array[left]]
//         right--
//     }
//      {
//         left++
//     }
// }

let nonZeroIndex = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];   
        nonZeroIndex++;
    }
}

console.log(nums)