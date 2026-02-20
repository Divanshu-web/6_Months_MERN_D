const students = [
{ id: 1, name: "Alice", age: 17, grade: "A", marks: 88, extraCurricularPoints: 3 },
{ id: 2, name: "Bob", age: 18, grade: "B", marks: 76, extraCurricularPoints: 4 },
{ id: 3, name: "Charlie", age: 19, grade: "A", marks: 82, extraCurricularPoints: 2 },
{ id: 4, name: "David", age: 17, grade: "C", marks: 91, extraCurricularPoints: 1 },
{ id: 5, name: "Eva", age: 18, grade: "B", marks: 90, extraCurricularPoints: 5 },
{ id: 6, name: "Frank", age: 16, grade: "A", marks: 78, extraCurricularPoints: 6 },
{ id: 7, name: "Grace", age: 18, grade: "B", marks: 84, extraCurricularPoints: 2 },
{ id: 8, name: "Hassan", age: 17, grade: "D", marks: 74, extraCurricularPoints: 4 },
{ id: 9, name: "Isha", age: 17, grade: "A", marks: 79, extraCurricularPoints: 3 },
{ id: 10, name: "Jack", age: 18, grade: "B", marks: 65, extraCurricularPoints: 5 },
];

// Step 1: Filter
// 1. Filter out students who:
// Scored at least 75 marks, and
// Have grade 'A' or 'B', and
// Are 18 or younger.

// Step 1: Filter
const filteredStudents = students.filter(student =>
    student.marks >= 75 &&
    (student.grade === "A" || student.grade === "B") &&
    student.age <= 18
);
console.log(filteredStudents);

// Step 2: Map
// From the filtered list, create a new array of objects that includes:
// name
// meritScore = marks + (extraCurricularPoints * 2)

// Step 2: Map
const meritList = filteredStudents.map(student => ({
    name: student.name,
    meritScore: student.marks + (student.extraCurricularPoints * 2)
}));
console.log(meritList);


// Step 3: Sort the final array descending by meritScore.
// Display the top 3 students as "Scholarship Shortlist".

// Step 3: Sort descending
const sortedMeritList = meritList.sort((a, b) => b.meritScore - a.meritScore);

// Step 4: Top 3
const scholarshipShortlist = sortedMeritList.slice(0, 3);
console.log("Scholarship Shortlist:");
console.log(scholarshipShortlist);



// ✅ Example Output:
// [ 
// { name: "Alice", meritScore: 95 },
//  { name: "Ravi", meritScore: 92 }, 
// { name: "Sara", meritScore: 90 } 
// ]