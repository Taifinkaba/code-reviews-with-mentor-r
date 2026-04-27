const { characterReplacement } = require('../leetcode/longestRepeating');

describe("characterReplacement", () => {
    test("returns 4 for XYYX with k = 2", () => {
        expect(characterReplacement("XYYX", 2)).toBe(4);
    });

    test("returns 5 for AAABABB with k = 1", () => {
        expect(characterReplacement("AAABABB", 1)).toBe(5);
    });

    test("returns 4 for AABABBA with k = 1", () => {
        expect(characterReplacement("AABABBA", 1)).toBe(4);
    });

    test("returns 1 when k = 0 and all chars are different", () => {
        expect(characterReplacement("ABCD", 0)).toBe(1);
    });

    test("returns full length when string already has same characters", () => {
        expect(characterReplacement("AAAA", 2)).toBe(4);
    });

    test("returns full length when k is bigger than needed", () => {
        expect(characterReplacement("ABC", 10)).toBe(3);
    });

    test("returns 0 for empty string", () => {
        expect(characterReplacement("", 2)).toBe(0);
    });
});