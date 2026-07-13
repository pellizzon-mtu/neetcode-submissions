class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums: number[]): boolean {
    //     const map: Map<number, boolean> = new Map()
    //     for(const num of nums){
    //         if(map.has(num)){
    //             return true;
    //         } else {
    //             map.set(num, true);
    //         }
    //     }
    //     return false;
    // }

    hasDuplicate(nums: number[]): boolean {
        const sorted = nums.sort()
        for(let i = 0; i < sorted.length - 1; i++){
            if (sorted[i] === sorted[i + 1]){
                return true;
            }
        }
        return false;
    }
}
