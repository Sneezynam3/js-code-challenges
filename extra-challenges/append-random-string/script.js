/* When the button is clicked, the text should change to a random element from the array of strings.
For this challeneg you will need to open the HTML file - be sure you are in the correct directory! */

const codingTerms = [
    "Debugging: Finding and fixing errors in your code.",
    "Algorithm: A step-by-step procedure for solving a problem.",
    "Syntax: The set of rules that dictate how code should be written.",
    "Variable: A container for storing data in your program.",
    "Function: A reusable block of code that performs a specific task.",
    "Conditional: A statement that allows you to make decisions in your code.",
    "Loop: A construct that allows you to repeat a block of code multiple times.",
  ];

  
  
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  

  const textElement = document.getElementById("text");

  document.querySelector("#change-text").addEventListener("click", function() {
    const randomElement = getRandomElement(codingTerms);
    textElement.textContent = randomElement;
  });