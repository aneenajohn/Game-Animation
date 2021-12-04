// VS Code suggests built-in canvas projects
/**  @type {HTMLCanvasElement}  */

const canvas = document.querySelector('.canvas');
//console.log({ canvas });

// To get a 2D context of the canvas
const ctx = canvas.getContext('2d');
//console.log(ctx);


// To set up canvas, create custom global variables
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;

const numberOfEnemies = 40;
const enemiesArray = [];
// const enemyImage = new Image();
// enemyImage.src = '/assets/enemy1.png'
let gameFrame = 0;
class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = '/assets/enemy1.png'
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.a = Math.random() * canvas.width;
        this.b = Math.random() * canvas.height;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293 // width of single enemy sprite
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
        // animate sprites
        // gameFrame % 2 === 0 => all flap at same speed once after every animate func call
        if (gameFrame % this.flapSpeed === 0) {

            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        // This puts all 6 enemies in the given dimensiions
        // ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height);

        // Crop out single frame ie 1 enemy object 
        // 2-5 Args rep where you want to crop the image
        // 6-9 args rep where you want to place the cropped image on canvas
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    }
}


for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

console.log(enemiesArray);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();