// Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

// a. Extra credit points: Add 5 points to each score
studentList.forEach(student => {
  student.scores = student.scores.map(score => score + 5); // Update each score by adding 5 points
});

// b. Missing exam score: Calculate average and add to the scores array
studentList.forEach(student => {
  const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  student.scores.push(avgScore); // Add average score as a new score
});

// c. Display the results
studentList.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}:`);
  console.log(`  Scores: ${student.scores.join(", ")}`);
  const minScore = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
  const maxScore = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
  const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  console.log(`  Min Score: ${minScore}`);
  console.log(`  Max Score: ${maxScore}`);
  console.log(`  Avg Score: ${avgScore.toFixed(2)}`);
});
