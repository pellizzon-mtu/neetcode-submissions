class Solution:
    def scoreOfString(self, s: str) -> int:
        sum = 0
        for idx in range(len(s) - 1):
            diff = abs(ord(s[idx + 1]) - ord(s[idx]))
            sum += diff
        
        return sum