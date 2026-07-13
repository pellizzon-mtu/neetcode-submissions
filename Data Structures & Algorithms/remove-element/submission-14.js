class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // arr num
        // val num
        //remove occurent of val in num
        //return k nums not equal to val
        let end = nums.length - 1;
        let start = 0;
        while (start <= end) {
            const current = nums[start]
            if(current === val){
                if(nums[end] === val){
                    end--;
                } else {
                    nums[start] = nums[end];
                    end--;
                    start++;
                }
            } else {
                start++;
            }
        }

        return start;
    }
}
