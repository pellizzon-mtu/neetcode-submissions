class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        //arr nums length n

        const arrLength = nums.length * 2;
        const newArray = new Array(arrLength).fill(0);

        for(let i = 0; i < nums.length; i++){
            newArray[i] = nums[i];
            newArray[i + nums.length] = nums[i];
        }

        return newArray;

    }
}
