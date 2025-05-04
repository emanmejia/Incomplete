// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
  // TODO: add code here
  if (index < 0 || index > node.childNodes.length) {
    console.error("Incorrect index");
  } else if (node.nodeType !== document.ELEMENT_NODE) {
    console.error("Wrong node type");
  } else {
    console.log(node.childNodes[index]);
  }
};

// Testing
//console.log(document.body.childNodes);

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
