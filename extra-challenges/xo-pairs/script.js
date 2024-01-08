/* Check to see if a string has the same amount of 'x's and 'o's. 
The function must return a boolean and be case insensitive. The string can contain any characters.

Examples input/output:

xoCheck("ooxx") => true
xoCheck("xooxx") => false
xoCheck("ooxXm") => true
xoCheck("zpzpzpp") => true
xoCheck("zzoo") => false

*/
function hasEqualLetterCounts(word) {
    const letterCounts = {};
  
    // Iterate over each letter in the word
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
  
      // Increase the count for the current letter
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  
    // Get the counts of the letters 'x' and 'o'
    const xCount = letterCounts['x'] || 0;
    const oCount = letterCounts['o'] || 0;
  
    // Check if the counts of 'x' and 'o' are equal
    return xCount === oCount;
  }
  
  console.log(hasEqualLetterCounts("ooxx")); // true
  console.log(hasEqualLetterCounts("xooxx")); // false
  console.log(hasEqualLetterCounts("ooxXm")); // true
  console.log(hasEqualLetterCounts("zpzpzpp")); // true
  console.log(hasEqualLetterCounts("zzoo")); //false