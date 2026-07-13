class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        if len(arr) == 1:
            arr[0] = -1
            return arr
        for i in range(len(arr)-1):
            arr[i] = max(arr[i+1:])
        # for i in range(len(arr)):
        #     if(i == len(arr) - 1):
        #         arr[i] = -1
        #         break
        #     greatest = -1
        #     for j in range(i+1, len(arr)):
        #         if(arr[j] > greatest):
        #             greatest = arr[j]
        #     arr[i] = greatest
        arr[-1] = -1
        return arr
