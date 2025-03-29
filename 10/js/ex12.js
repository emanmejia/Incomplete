const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

const femaleStudentResults = students
  .filter(student => student.sex === "f")
  .map(student => ({
    name: student.name,
    avgGrade: student.grades.reduce((sum,grade) => sum + grade, 0) / student.grades.length // used the internet to figure this one out as I got stuck.
  }))

console.log(femaleStudentResults);