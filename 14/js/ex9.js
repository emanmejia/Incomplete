if (document.querySelector("a").hasAttribute("target")) {
  console.log("The first link has a target attribute.");
} else {
  console.log("The first link does not have a target attribute."); // Will be shown
}

// This is for a "target" attirbute, which is used in HTML to specify where to open the linked document.  
//
// It can be set to "_blank" to open the link in a new tab or window, "_self" to open it in the same frame as it was clicked, and other values for different behaviors.  
// 
//  The target attribute is not always necessary, but it can be useful for controlling how links behave when clicked.