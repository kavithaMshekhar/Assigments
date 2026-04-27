/* Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.*/

/*"Java is a popular programming language. Java is used for web development, mobile applications, and more.";*/

//1. Find total number of occurrences
const paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const searchWord: string = "Java";
let index = 0;
let count = 0;

while ((index = paragraph.indexOf(searchWord, index)) !== -1) {
  console.log(`Found at index: ${index}`);
  count++;
   index += searchWord.length; // move forward
}
console.log("Total occurrences:", count);

//2. Print count and Indexes of the word
let indexes: number[] = [];

while ((index = paragraph.indexOf(searchWord, index)) !== -1) {
  indexes.push(index);   // store index
  count++;
  index += searchWord.length;
}
console.log("Indexes:", indexes);
console.log("Total Count:", count);

// Find all occurrences
while ((index = paragraph.indexOf(searchWord, index)) !== -1) {
  indexes.push(index);
  count++;
  index += searchWord.length;
}
console.log("Paragraph:", paragraph);
console.log("Search Word:", searchWord);
console.log("Indexes:", indexes);
console.log("Total Occurrences:", count);