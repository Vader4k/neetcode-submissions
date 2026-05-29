class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hmap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            hmap.set(nums[i], (hmap.get(nums[i]) || 0) + 1);
        }

        const sorted = [...hmap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((entry) => entry[0]);

        return sorted;
    }
}
