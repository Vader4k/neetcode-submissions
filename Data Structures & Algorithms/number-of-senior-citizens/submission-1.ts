class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let i = 0;
        let total = 0;

        for (i = 0; i < details.length; i++) {
            if (Number(details[i][11] + details[i][12]) > 60) {
                total += 1;
            }
        }

        return total
    }
}
