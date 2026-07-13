class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #O(n^n)
        # current = 0
        # x = []
        # for i in range(len(nums)):
        #     product = 1
        #     for j in range(len(nums)):
        #         if i != j:
        #             product = product * nums[j]
        #     x.append(product)
        # return x
        output = [1] * len(nums)
        prefix = 1
        for i in range(len(nums)):
            output[i] = prefix 
            prefix *= nums[i]

        postfix = 1
        for i in range (len(nums)-1, -1, -1):
            output[i] *= postfix 
            postfix *= nums[i]
        return output
        #O(n)
