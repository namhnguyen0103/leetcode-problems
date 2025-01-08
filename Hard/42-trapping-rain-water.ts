/* 
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how 
much water it can trap after raining.

Example 1:

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In 
    this case, 6 units of rain water (blue section) are being trapped.

Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9

*/

function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let left_max = height[left];
    let right_max = height[right];
    let water = 0;

    while (left < right) {
        if (left_max < right_max) {
            left++;
            left_max = Math.max(left_max, height[left]);
            water += left_max - height[left];
        }
        else {
            right--;
            right_max = Math.max(right_max, height[right]);
            water += right_max - height[right];
        }
    }

    return water;
};