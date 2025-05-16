//Complete the code to display all body nodes (including text)
//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  const body = document.body;
  const nodes = body.childNodes;

  nodes.forEach(node => {
      console.log(node);
  });
}

bodyNodes();

