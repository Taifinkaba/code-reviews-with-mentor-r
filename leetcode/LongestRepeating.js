function characterReplacement(s, k) {
    // left, longest valid length, count of most frequent char, frequency map
    let left = 0, maxLen = 0, most = 0, count = {};        

    // expand right pointer to explore new characters
    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // add current char to frequency map
        count[char] = (count[char] || 0) + 1;

        // update most frequent character count in this window
        if (count[char] > most) most = count[char];

        // check if window is invalid
        // (window size - most frequent char) = replacements needed
        while ((right - left + 1) - most > k) {
            let leftChar = s[left];

            // remove left character from window and move up left pointer
            count[leftChar]--;
            left++;
        }

        // update max length after ensuring window is valid
        let windowLen = right - left + 1;
        if (windowLen > maxLen) maxLen = windowLen;
    }

    return maxLen;
}

// Test cases
console.log(characterReplacement("XYYX", 2));     // 4
console.log(characterReplacement("AAABABB", 1));  // 5
console.log(characterReplacement("AABABBA", 1));  // 4
console.log(characterReplacement("ABCD", 0));     // 1
console.log(characterReplacement("AAAA", 2));     // 4
console.log(characterReplacement("ABC", 10));     // 3
console.log(characterReplacement("", 2));         // 0