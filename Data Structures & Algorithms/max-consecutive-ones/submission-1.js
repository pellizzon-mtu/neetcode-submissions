class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0
        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            if(num === 1){
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } 
            else {
                currentCount = 0
            }
        }

        return maxCount;
    }
}
