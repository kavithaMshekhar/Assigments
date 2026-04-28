//Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows

function printTriangle(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern :string = "";

    // spaces first
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    // stars
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
// function call
printTriangle(5);
