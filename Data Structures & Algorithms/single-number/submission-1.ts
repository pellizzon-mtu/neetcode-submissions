class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let response = 0
        for(const num of nums){
            response ^= num
        }

        return response;
    }
}
