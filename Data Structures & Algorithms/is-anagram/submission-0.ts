class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const val1 = [...s].sort().join();
        const val2 = [...t].sort().join();

        if (val1 === val2) {
            return true;
        } else {
            return false;
        }
    }
}
