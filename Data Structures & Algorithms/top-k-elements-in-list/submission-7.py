class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if len(nums) == 1:
            if k == 1:
                return nums
            else:
                return []
            
        mapper = {}
        els = []
        # construct map num:freq
        for i in range(len(nums)):
            if nums[i] in mapper:
                mapper[nums[i]] += 1
            else:
                mapper[nums[i]] = 1
        
        counted_num = []
        for i in range(k):
            biggest_freq = 0
            biggest_num_freq = 0 
            for num, freq in mapper.items():
                if freq > biggest_freq and num not in counted_num:
                    biggest_num_freq = num
                    biggest_freq = freq
            counted_num.append(biggest_num_freq)
            els.append(biggest_num_freq)


        return els
        
