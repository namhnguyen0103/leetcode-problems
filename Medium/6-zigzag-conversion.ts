/* 
6. ZigZag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I
    
Example 3:

Input: s = "A", numRows = 1
Output: "A"

*/

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let sPattern = "";
    const diagRows = numRows - 2;
    const sum = diagRows + numRows;

    for (let i = 0; i < s.length; i += sum) {
        sPattern = sPattern + s[i];
    }

    for (let i = 1; i < numRows - 1; i++) {
        for (let j = 0; j < s.length; j += sum) {
            if (j + i < s.length) {
                sPattern = sPattern + s[j + i];
            }
            const d = j + sum - i;
            if (d < s.length) {
                sPattern = sPattern + s[d];
            }
        }
    }

    for (let i = numRows - 1; i < s.length; i += sum) {
        sPattern = sPattern + s[i];
    }

    return sPattern;

};