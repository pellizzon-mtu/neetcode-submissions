class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // brute force O(n^n)
        if(nums.length === 2) return [0, 1];
        const mapper = new Map<number, number>();
        
        for(let i = 0; i < nums.length; i++){
            const diff: number = target - nums[i]
            if(mapper.has(diff)){
                return[i, mapper.get(diff)]
            }
            mapper.set(nums[i], i)
        }
    }
}
