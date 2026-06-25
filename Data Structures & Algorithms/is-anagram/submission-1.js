class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for(const i of s){
           if(map.has(i)){
            map.set(i, map.get(i)+1);
           }else map.set(i, 1);
        }

        for(const j of t){
           if(map.has(j)){
            if(map.get(j) > 1) map.set(j, map.get(j)-1);
            else map.delete(j)
           }else map.set(j, 1);
        }

        return map.size === 0;
    }
}
