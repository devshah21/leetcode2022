class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        
        values = ""
        
        for i in range(len(strs[0])):
            for s in strs:
                if  i == len(s) or s[i] != strs[0][i]:
                    return values
            values += strs[0][i]
            
        return values
                    
        
