/* 
189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

*/

/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    if (k !== 0) {
        nums.reverse();
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
};

function reverse(nums: number[], start: number, end: number) {
    let temp;
    for (let i = 0; i < (end - start) / 2; i++) {
        temp = nums[end - i];
        nums[end - i] = nums[start + i];
        nums[start + i] = temp;
    }
}