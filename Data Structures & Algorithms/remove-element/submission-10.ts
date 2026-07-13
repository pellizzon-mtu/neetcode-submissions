class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0; // Pointer for the next valid element position

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k; // k automatically equals the total count of valid elements!
    }
}