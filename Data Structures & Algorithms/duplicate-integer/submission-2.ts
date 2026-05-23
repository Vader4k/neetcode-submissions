class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let i;
        let newArr: number[] = [];
        for (i = 0; i < nums.length; i++) {
            if (newArr.includes(nums[i])) {
                return true;
            } else {
                newArr.push(nums[i]);
            }
        }
        return false;
    }
}
