// String sentance = "Java programming is fun and challenging";

//1. Count the total number of words in the sentance.
const sentance: string = "Java programming is fun and challenging";

// Split sentance into words
const words: string[] = sentance.split(" ");

// Count words
const wordCount: number = words.length;

console.log("Total number of words:", wordCount);  //Total number of words: 6

// 2. Print the sentance words in reverse order.
// Split → Reverse → Join
const reversedSentance: string = sentance.split(" ").reverse().join(" ");

console.log("Reversed Sentance:", reversedSentance); //Reversed Sentance: challenging and fun is programming Java

// 3. Convert the first character of each word to uppercase and print original sentance
const updatedSentance = sentance
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Updated Sentance:", updatedSentance); // Updated Sentence: Java Programming Is Fun And Challenging