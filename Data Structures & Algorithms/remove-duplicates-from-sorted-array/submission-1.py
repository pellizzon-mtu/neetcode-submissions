class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if not nums:
            return 0
        
        # 'write_index' tracks where the next unique element should be placed
        write_index = 1
        
        # 'i' scans through the array starting from the second element
        for i in range(1, len(nums)):
            # If we find a new unique element
            if nums[i] != nums[i - 1]:
                nums[write_index] = nums[i]
                write_index += 1
                
        return write_index