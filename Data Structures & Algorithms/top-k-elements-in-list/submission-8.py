class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Step 1: Count frequencies instantly using C-optimized Counter
        count = collections.Counter(nums)
        
        # Step 2: Use a heap to extract the top k frequent elements in O(N log k)
        return heapq.nlargest(k, count.keys(), key=count.get)
        
