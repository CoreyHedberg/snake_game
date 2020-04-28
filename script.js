let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

let foodX = 0;
let foodY = 0;

let snake = [{ x: 300, y: 300 }];
let headX = snake[0].x;
console.log(`headX : ${headX}`);
let headY = snake[0].y;
console.log(`headY : ${headY}`);
let directionX = 0;
let directionY = 0;

const CANVAS_BACKGROUND_COLOR = "#F5F5DC";
const SNAKE_COLOR = "#004200";
const SNAKE_BORDER_COLOR = "#006600";
const APPLE_COLOR = "#FF0000";
const APPLE_BORDER_COLOR = "#820000";

let score = 0;
document.getElementById("current-score").innerHTML = score;
let highScore = 0;
document.getElementById("high-score").innerHTML = highScore;

let gameStarted = false;
let gameOver = false;

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      // left key pressed
      e.preventDefault();
      console.log(`left`);
      changeDirection(e.keyCode);
      break;
    case 38:
      // up key pressed
      e.preventDefault();
      console.log(`up`);
      changeDirection(e.keyCode);
      break;
    case 39:
      // right key pressed
      e.preventDefault();
      console.log(`right`);
      changeDirection(e.keyCode);
      break;
    case 40:
      // down key pressed
      e.preventDefault();
      console.log(`down`);
      changeDirection(e.keyCode);
      break;
  }
});

window.onload = () => {
  if ((localStorage.getItem("high_score") = "")) {
    document.getElementById("high-score").innerHTML = 0;
  } else (
    let reloadHighScore = localStorage.getItem("high_score");
    document.getElementById("high-score").innerHTML = reloadHighScore;)
  }
  createRandomApple();
  isGameOver();
  main();
  // drawCanvas();
  // drawSnake();
  // drawSnakeSegment();
};

function main() {
  if (gameOver === true) return;
  setTimeout(() => {
    drawCanvas();
    drawRandomApple();
    drawSnake();
    growSnake();
    isGameOver();
    main();
  }, 100);
}

// Draws the canvas
function drawCanvas() {
  context.fillStyle = CANVAS_BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  snake.forEach(drawSnakeSegment);
}

function drawSnakeSegment(snakeSegment) {
  context.fillStyle = SNAKE_COLOR;
  context.strokestyle = SNAKE_BORDER_COLOR;
  context.fillRect(snakeSegment.x, snakeSegment.y, 10, 10);
  context.strokeRect(snakeSegment.x, snakeSegment.y, 10, 10);
}

function growSnake() {
  const head = { x: snake[0].x + directionX, y: snake[0].y + directionY };
  snake.unshift(head);

  if (head.x === foodX && head.y === foodY) {
    score++;
    document.getElementById("current-score").innerHTML = score;
    createRandomApple();
  } else {
    snake.pop();
  }
}

function changeDirection(e) {
  const goingUp = directionY === -10;
  const goingDown = directionY === 10;
  const goingRight = directionX === 10;
  const goingLeft = directionX === -10;
  if (e === 37 && !goingRight) {
    directionX = -10;
    directionY = 0;
  }
  if (e === 38 && !goingDown) {
    directionX = 0;
    directionY = -10;
  }
  if (e === 39 && !goingLeft) {
    directionX = 10;
    directionY = 0;
  }
  if (e === 40 && !goingUp) {
    directionX = 0;
    directionY = 10;
  }
}

// Good function, ready to use.
function createRandomApple() {
  foodX = Math.floor(Math.random() * 60) * 10;
  foodY = Math.floor(Math.random() * 60) * 10;

  snake.forEach(function isFoodOnSnake(part) {
    appleIsOnSnake = part.x === foodX && part.y === foodY;
    if (appleIsOnSnake) {
      createRandomApple();
    }
  });
}

function drawRandomApple() {
  context.fillStyle = APPLE_COLOR;
  context.strokesytle = APPLE_BORDER_COLOR;
  context.fillRect(foodX, foodY, 10, 10);
  context.strokeRect(foodX, foodY, 10, 10);
}

function isGameOver() {
  for (var i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      gameOver();
    }
    if (
      snake[0].x < 0 ||
      snake[0].x > canvas.width - 10 ||
      snake[0].y < 0 ||
      snake[0].y > canvas.height - 10
    ) {
      gameOver();
    }
  }
}

function gameOver() {
  // save
  gameOver = true;
  if (score > highScore) {
    highScore = score;
  }
  localStorage.setItem("high_score", highScore);
  score = 0;
  document.getElementById("current-score").innerHTML = score;
  document.getElementById("high-score").innerHTML = highScore;
  beforeGameMessage();
}

// Good function, ready to use.
function beforeGameMessage() {
  drawCanvas();
  context.fillStyle = "#000000";
  context.font = "30px PixelBoy";
  context.fillText(`Press an arrow key to begin.`, 124, 300);
}
