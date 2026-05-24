class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let newArr = []
        let i;
        let j;

        for(i=0; i<arr.length; i++){
            let biggest = -1
            for(j=i+1; j<arr.length; j++){
                if(arr[j] > biggest){
                    biggest = arr[j];
                }

            }
            newArr.push(biggest)
        }

        return newArr
    }
}
