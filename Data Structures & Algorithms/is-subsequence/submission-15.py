class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_p = 0

        for ch in t:    
            if s_p < len(s) and ch == s[s_p]:
                s_p += 1    
        return s_p == len(s)
       
        # t_p = 0
        # s_p = 0
        
        # while s_p < len(s) and t_p < len(t):
        #     if s[s_p] == t[t_p]:
        #         s_p += 1
        #     t_p += 1
        # return s_p == len(s)