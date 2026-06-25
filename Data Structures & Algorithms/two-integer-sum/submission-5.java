class Solution {
    public int[] twoSum(int[] nums, int target) {
        int left = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        while (left < nums.length) {
            int remainder = target - nums[left];
            if (map.containsKey(remainder)) {
                return new int[] {map.get(remainder), left};
            }
            map.put(nums[left], left);
            left++;
        }

        return new int[]{-1};
    }
}
