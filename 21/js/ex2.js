fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  }); // Display error message in the console