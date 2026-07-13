class Solution:
    def reverseString(self, s: List[str]) -> None:
        size = len(s)
        if size > 1:
            left = 0 
            right = size - 1

            while left < right:
                temp = s[left]
                s[left] = s[right]
                s[right] = temp
                left+=1
                right-=1
        