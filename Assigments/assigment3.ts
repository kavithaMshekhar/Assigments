 //create studaent informatiom using Array/Datatypes/Operators

 const studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
const marks: number[] = [75, 80, 82];

// Add 10 marks to each student
const updatedMarks: number[] = marks.map(mark => mark += 10);

// Calculate average
const totalMarks: number = updatedMarks.reduce((sum, mark) => sum + mark, 0);
const average: number = totalMarks / updatedMarks.length;

// Output
console.log("Student Names:", studentNames);
console.log("Updated Marks:", updatedMarks);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);