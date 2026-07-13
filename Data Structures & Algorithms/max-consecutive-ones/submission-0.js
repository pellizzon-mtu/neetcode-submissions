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
            } 
            else {
                maxCount = maxCount > currentCount ? maxCount : currentCount;
                currentCount = 0
            }
        }

        return Math.max(maxCount, currentCount);
    }
}
