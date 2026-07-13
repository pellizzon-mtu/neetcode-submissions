class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        //arr[i] replace with -> max value on the right subarray
        for(let i = 0; i < arr.length; i++){
            let maxRightNumber = -1;
            for(let k = i + 1; k < arr.length; k++){
                maxRightNumber = Math.max(arr[k], maxRightNumber);
            }
            arr[i] = maxRightNumber;
        }

        return arr;
    }
}