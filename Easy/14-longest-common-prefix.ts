/* 
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

*/

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return ""
        }
    }

    return prefix;
};