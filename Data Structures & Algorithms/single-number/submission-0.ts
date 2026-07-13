class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let response = nums[0]
        for(let i = 1; i < nums.length; i++){
            response ^= nums[i]
        }

        return response;
    }
}
