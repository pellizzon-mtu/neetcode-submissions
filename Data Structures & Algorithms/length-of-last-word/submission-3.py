class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        maxLen = 0
        compareLen = 0

        for idx in range(len(s)):
            if s[idx] != " ":
                compareLen += 1
            else:
                if compareLen > 0:
                    maxLen = compareLen
                compareLen = 0

        if compareLen > 0:
            maxLen = compareLen

        return maxLen
                