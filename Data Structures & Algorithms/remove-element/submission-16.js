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
        let position = 0;

        for(let checker = 0; checker < nums.length; checker++){
            if(nums[checker] !== val){
                nums[position] = nums[checker];
                position++;
            }
        }

        return position;
    }
}
