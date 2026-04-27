const { diameterOfBinaryTree } = require('../leetcode/binaryTree');

describe('diameterOfBinaryTree', () => {
    test('empty tree', () => {
        expect(diameterOfBinaryTree(null)).toBe(0);
    });
    test('single node', () => {
        const root = { val: 1, left: null, right: null };
        expect(diameterOfBinaryTree(root)).toBe(0);
    });
    test('two nodes', () => {
        const root = { val: 1, left: { val: 2, left: null, right: null }, right: null };
        expect(diameterOfBinaryTree(root)).toBe(1);
    });
    test('balanced tree', () => {
        const root = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
        expect(diameterOfBinaryTree(root)).toBe(2);
    });
    test('unbalanced tree', () => {
        const root = { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: null }, right: { val: 3, left: null, right: null } };
        expect(diameterOfBinaryTree(root)).toBe(3);
    });
});