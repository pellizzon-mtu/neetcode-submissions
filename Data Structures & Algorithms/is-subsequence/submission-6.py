class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        t_p = 0
        s_p = 0
        if len(s) == 0:
            return True
        if len(t) == 0 and len(s) != 0:
            return False
        while s_p <= len(s) - 1:
            while t_p <= len(t) - 1:
                if s[s_p] == t[t_p]:
                    break;
                t_p += 1
            
            if t_p >= len(t):
                return False
            s_p += 1        
            t_p += 1

        return True