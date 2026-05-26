class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let i = 0;
        let currentStreak = 0;
        let maxStreak = 0;

        while (i < nums.length) {
            if (nums[i] === 1) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
            i++;
        }
        return maxStreak;
    }
}
