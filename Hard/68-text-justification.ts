/* 
68. Text Justification

Given an array of strings words and a width maxWidth, format the text such that each line has exactly 
maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. 
Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a 
line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:

    Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
    Output:
    [
    "This    is    an",
    "example  of text",
    "justification.  "
    ]

Example 2:

    Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
    Output:
    [
    "What   must   be",
    "acknowledgment  ",
    "shall be        "
    ]
    Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
    Note that the second line is also left-justified because it contains only one word.

Example 3:

    Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
    Output:
    [
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  "
    ]

*/

function fullJustify(words: string[], maxWidth: number): string[] {
    let output: string[] = [];
    let first = 0;
    let last = 0;

    while (first < words.length) {
        let length = words[first].length;
        let line = words[first];
        last++;

        while ((last < words.length) && (length + words[last].length + (last - first)) <= maxWidth) {
            length += words[last].length;
            last++;
        }
        
        if (last - first === 1) {
            for (let i = 0; i < maxWidth - length; i++) {
                line = line + " ";
            }
            first = last;
        }
        else if (last >= words.length) {
            for (first++; first < last; first++) {
                line = line + " " + words[first];
            }
            const spaces = line.length;
            for (let i = 0; i < maxWidth - spaces; i++) {
                line = line + " ";
            }
        }
        else {
            let spaces = maxWidth - length;
            for (first++; first < last; first++) {
                let space = Math.ceil(spaces / (last - first));
                for (let i = 0; i < space; i++) {
                    line = line + " ";
                }
                line = line + words[first];
                spaces -= space;
            }
        }
        output.push(line);
    }
    return output;
};