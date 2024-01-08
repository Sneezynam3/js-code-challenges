/* Write a function that takes a string of random words and 
returns an object with the unique words as keys (ignoring case) 
and values of the number of times the word appears

Exmaple input/output: 

const str = "Gabba boo dah ugh fpp BOO gabba doo Boo"

console.log(convertToObjectWithCounts(str)) => { gabba: 2, boo: 3, dah: 1, ugh: 1, fpp: 1, doo: 1 }

*/

function convertToObjectWithCounts(str) {
    const wordCounts = {};
  
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
  
      if (wordCounts[word]) {
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
    }
  
    return wordCounts;
  }
  
  const str = "Gabba boo dah ugh fpp BOO gabba doo Boo";
  console.log(convertToObjectWithCounts(str));