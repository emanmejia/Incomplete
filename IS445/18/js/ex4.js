// Move the block to the left
const moveBlock = () => {
  // Convert the left position of the block (value of the form "XXpx") to a number
  const xBlock = parseFloat(getComputedStyle(blockElement).left);
  // Move the block to the right
  blockElement.style.left = (xBlock + movement) + "px";
  // Have the browser call moveBlock as soon as possible
  requestAnimationFrame(moveBlock);
};

const blockElement = document.getElementById("block");

// Movement value in pixels
const movement = 7;

// Start the animation
requestAnimationFrame(moveBlock);