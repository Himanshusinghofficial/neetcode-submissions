class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i=0; i<strs.length; i++){
            const str = strs[i].split('').sort().join('');
            if(map.has(str)) {
                const get = map.get(str);
                map.set(str, [...get, strs[i]]);
            } else {
                map.set(str, [strs[i]])
            }
        }
        return [...map.values()];
    }
}
