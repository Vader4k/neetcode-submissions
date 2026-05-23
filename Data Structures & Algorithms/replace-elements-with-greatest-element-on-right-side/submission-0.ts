class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let newArr: number[] = [];
        let i: number;
        let j: number;
        let biggest: number;

        for (i = 0; i < arr.length; i++) {
            biggest = -1;
            for (j = i + 1; j < arr.length; j++) {
                if (arr[j] > biggest) {
                    biggest = arr[j];
                } else {
                    continue;
                }
            }
            newArr.push(biggest);
        }
        return newArr;
    }
}
