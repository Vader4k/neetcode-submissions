class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let newArr = [];
        let i = 0;
        let j = 0;

        for (i = 0; i < nums.length; i++) {
            for (j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                   newArr.push(i,j)
                   return newArr
                }
            }
            j++
        }
    }
}
