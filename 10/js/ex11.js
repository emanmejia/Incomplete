const arrays = [[1, 4], [11], [3, 5, 7]];

const arraysSums = arrays
.map(subArray => subArray.reduce((sum, num) => sum + num, 0))
.reduce((total, subSums) => total + subSums, 0);


console.log(arraysSums); // Should show 31



