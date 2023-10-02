function consecutiveSubstrings(string) {
  const substrings = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i, j));
    }
  }

  return substrings;
}

// Test cases
console.log(consecutiveSubstrings('abc')); // ['a', 'ab', 'abc', 'b', 'bc', 'c']
console.log(consecutiveSubstrings('a')); // ['a']

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Create an empty array called substrings to store the consecutive substrings.
// Iterate over each character in the input string.
// Within the outer loop, iterate over each character starting from the current character to the end of the string.
// Append the substring from the current character to the end of the string to the substrings array.// Repeat steps 3-4 for all characters in the input string.
// Return the substrings array.

Explanation:
// We create an empty array called substrings to store the consecutive substrings.
// We iterate over each character in the input string using a for loop with the index variable i.
// Within the outer loop, we iterate over each character starting from the current character to the end of the string using another for loop with the index variable j.
// We use the slice() method to extract the substring from the current character i to the character at index j (exclusive) and push it into the substrings array.
// We repeat steps 3-4 for all characters in the input string.
// Finally, we return the substrings array.
