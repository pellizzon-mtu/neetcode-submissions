class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        current = 0
        x = []
        for i in range(len(nums)):
            product = 1
            for j in range(len(nums)):
                if i != j:
                    product = product * nums[j]
            x.append(product)
        
        return x