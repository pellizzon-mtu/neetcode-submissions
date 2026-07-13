class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        truth_map = {}

        for char in s:
            if char in truth_map:
                truth_map[char] = truth_map.get(char) + 1
            else:
                 truth_map[char] = 1
        
        for char in t:
            if char in truth_map:
                truth_map[char] = truth_map.get(char) - 1
                if truth_map[char] < 0:
                    return False
            else:
                return False
        
        return True