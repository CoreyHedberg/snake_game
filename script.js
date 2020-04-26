let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

let gameSpeed = 100;
let foodX = 0;
let foodY = 0;

const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;

let snake = [{ x: 300, y: 300 }];
console.log(snake[0].x);
console.log(snake[0].y);
let directionX = 10;
let directionY = 10;

const CANVAS_BACKGROUND_COLOR = "#F5F5DC";
const SNAKE_COLOR = "#004200";
const SNAKE_BORDER_COLOR = "#006600";
const APPLE_COLOR = "#FF0000";
const APPLE_BORDER_COLOR = "#820000";

let gameStarted = false;

window.onload = () => {
  drawCanvas();
  drawSnakeSegment();
  // beforeGameMessage();
};

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      // left key pressed
      e.preventDefault();
      console.log(`left`);
      moveSnake();
      break;
    case 38:
      // up key pressed
      e.preventDefault();
      console.log(`up`);
      break;
    case 39:
      // right key pressed
      e.preventDefault();
      console.log(`right`);
      break;
    case 40:
      // down key pressed
      e.preventDefault();
      console.log(`down`);
      break;
  }
});

// Draws the canvas
function drawCanvas() {
  context.fillStyle = CANVAS_BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnakeSegment() {
  context.fillStyle = SNAKE_COLOR;
  context.strokestyle = SNAKE_BORDER_COLOR;
  context.fillRect(snake[0].x, snake[0].y, 10, 10);
  context.strokeRect(snake[0].x, snake[0].y, 10, 10);
}

document
  .getElementById("place-apple")
  .addEventListener("click", placeRandomApple);

// Good function, ready to use.
function placeRandomApple() {
  foodX = Math.floor(Math.random() * 60) * 10;
  foodY = Math.floor(Math.random() * 60) * 10;
  context.fillStyle = APPLE_COLOR;
  context.strokesytle = APPLE_BORDER_COLOR;
  context.fillRect(foodX, foodY, 10, 10);
  context.strokeRect(foodX, foodY, 10, 10);
}

// Good function, ready to use.
function beforeGameMessage() {
  drawCanvas();
  context.fillStyle = "#000000";
  context.font = "30px PixelBoy";
  context.fillText(`Press an arrow key to begin.`, 124, 300);
}

function moveSnake() {
  if (e.keyCode === LEFT_KEY) {
    snake[0].x -= directionX;
  }
}
