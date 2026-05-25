class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const filtered = s.split(" ").filter((s) => s !== "");
        const lastIndex = filtered.length - 1;
        return filtered[lastIndex].length;
    }
}
