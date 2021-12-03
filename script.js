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

//enemy1 = {
//    x: 0,
//    y: 0,
//    width: 150,
//    height: 150
//}

const numberOfEnemies = 100;
const enemiesArray = [];
class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.a = Math.random() * canvas.width;
        this.b = Math.random() * canvas.height;
        this.width = 20;
        this.height = 20;
        this.speed = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
        this.a += this.speed;
        this.b += this.speed;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.a, this.b, this.width, this.height)
    }
}

//const enemy1 = new Enemy();

//function animate() {
//    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // to clear the old paint
//    enemy1.x++;
//    enemy1.y++
//        ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
//    requestAnimationFrame(animate); // creates endless animation loop
//}

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

console.log(enemiesArray);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.clearRect(500, 700, CANVAS_HEIGHT, CANVAS_WIDTH);
    //enemy1.update();
    //enemy1.draw();
    enemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}

animate();