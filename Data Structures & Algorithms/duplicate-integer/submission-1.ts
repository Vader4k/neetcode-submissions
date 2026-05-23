class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let i
        let newArr = new Set()
        for(i=0; i<nums.length; i++){
                if(newArr.has(nums[i])){
                        return true
                }else{
                        newArr.add(nums[i])
                }
        }
        return false
    }
}
