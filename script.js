// VS Code suggests built-in canvas projects
/**  @type {HTMLCanvasElement}  */

const canvas = document.querySelector('.canvas');
console.log({ canvas });

// To get a 2D context of the canvas
const ctx = canvas.getContext('2d');
console.log(ctx);


// To set up canvas, create custom global variables
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;