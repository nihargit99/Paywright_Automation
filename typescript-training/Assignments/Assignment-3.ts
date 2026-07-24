let studentName: string[] = ["Suresh", "Mahesh", "Naresh"];

let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let sumOfMarks: number = 0;

for (let i = 0; i < marks.length; i++) {
    marks[i] = marks[i]! + 10
    sumOfMarks = sumOfMarks + marks[i]!

    console.log(`${studentName[i]}: ${marks[i]}`);

}


let avgMarks: number = sumOfMarks / marks.length
console.log(`Average Mark after update: ${avgMarks}`)