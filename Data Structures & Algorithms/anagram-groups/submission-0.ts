class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const arrange = strs[i].split("").sort().join("");
            if (group.has(arrange)) {
                group.get(arrange).push(strs[i]);
                continue;
            }
            group.set(arrange, [strs[i]]);
        }

        return Array.from(group.values())
    }
}
