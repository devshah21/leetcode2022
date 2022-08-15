class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevalues = {}
        
        for i, n in enumerate(nums):
            opp = target - n
            if opp in prevalues: 
                return [prevalues[opp], i]
            prevalues[n] = i

        
