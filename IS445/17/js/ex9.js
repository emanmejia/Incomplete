document.getElementById("emailAddress").addEventListener("blur", e => {
  let emaiAddressValidity = "";
  if (e.target.value.indexOf("@") === -1) {
    // the email address doesn't contain @
    emaiAddressValidity = "Invalid email address";
  }
  document.getElementById("emailHelp").textContent = emaiAddressValidity;
  document.getElementById("emailHelp").style.color = "red"; // helper text color
})

// Review Chapter 17 for some really good JavaSCript regular expressions via a table.

// You can use regular expressions to validate email addresses. Here are some examples of how to do this in JavaScript:

const regex = /@/; // String must contain @
console.log(regex.test(""));  // false
console.log(regex.test("@")); // true
console.log(regex.test("sophie&mail.fr")); // false
console.log(regex.test("sophie@mail.fr")); // true