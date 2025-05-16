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

// Filter students whose last name starts with "C"
const cLastNameResults = studentList
  .filter(student => student.lastName.startsWith("C"))  // Filter by last name
  .map(student => {
      // Calculate Min, Max, and Average Score using reduce
      const minScore = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
      const maxScore = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
      const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;

      return {
          firstName: student.firstName,
          lastName: student.lastName,
          minScore,
          maxScore,
          avgScore
      };
  });

console.log(cLastNameResults);
