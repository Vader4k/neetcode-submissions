class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let i;
        let j;
        let sum = 0;

        for (i = 0; i < s.length; i++) {
            for (j = i + 1; j < s.length; j++) {
                sum += Math.abs(s[j].charCodeAt(0) - s[i].charCodeAt(0));
                i++;
            }
            j++;
        }

        return sum
    }
}
