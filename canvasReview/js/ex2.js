const linkInfo = () => {
  // Get all the link elements
  const linkElements = document.getElementsByTagName("a");
  // Test
  //console.log(linkElements);

  // Let's display the number of elements using the length property
  console.log(linkElements.length);
  // Display the first element
  console.log(linkElements[0].href);
  // Display the last element
  console.log(linkElements[linkElements.length - 1].href);
}

linkInfo();