class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0; i<nums.length; i++){
            const checkInMap = target - nums[i];
            if(map.has(checkInMap)) return [i, map.get(checkInMap)];
            else map.set(nums[i], i);
        }
    }
}
