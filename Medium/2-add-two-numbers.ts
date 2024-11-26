/* 
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]

Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

*/

/* Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 !== null && l2 !== null) {
        const sum = l1.val + l2.val;
        if (sum >= 10) {
            if (l1.next !== null) l1.next.val += 1;
            else l1.next = new ListNode(1, null);
            return new ListNode(sum % 10, addTwoNumbers(l1.next, l2.next));
        }
        return new ListNode(sum, addTwoNumbers(l1.next, l2.next));
    }
    else if (l1 !== null) {
        if (l1.val >= 10)
            if (l1.next !== null) l1.next.val += 1;
            else l1.next = new ListNode(1, null);
        return new ListNode(l1.val % 10, addTwoNumbers(l1.next, l2));
    }
    else if (l2 !== null) {
        return new ListNode(l2.val, addTwoNumbers(l1, l2.next));
    }
    return null;
};
