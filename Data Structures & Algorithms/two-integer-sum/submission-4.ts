class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
         if(nums.length === 2) return [0, 1];
        // O(n)
        // Map<number, index>
        const map = new Map<number, number>();
        for(let i = 0; i < nums.length; i += 1) {
            const dif = target - nums[i];
            if(map.has(dif)) {
                return [i, map.get(dif)];
            }
            map.set(nums[i], i);
        }
    }
}
