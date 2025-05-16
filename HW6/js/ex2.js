/*
const classes = document.getElementById("spring").classList;
console.log(classes.length); // 1 (since the element only has one class)
console.log(classes[0]);     // "iscourses"
*/

const displayText400 = () => {
  const courses = document.getElementsByClassName("400level");

  for (const course of courses) {
    console.log(course.textContent);
  }
}

displayText400();
