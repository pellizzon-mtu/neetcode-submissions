class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // brute force O(n^n)
        let i = 0
        let j = 0
        for(; i < nums.length ; i++){
            let flag = false
            for(j = 0; j < nums.length; j++){
                if(i !== j && nums[i] + nums[j] === target){
                    flag = true
                    break;
                }
            }
            if (flag === true) break;
        }
        return[i, j]
    }
}
