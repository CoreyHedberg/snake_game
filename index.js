const CANVAS = document.getElementById("game-canvas")
const CONTEXT = CANVAS.getContext("2d")
const CANVAS_BACKGROUND_COLOR = "#F5F5DC"
const SNAKE_COLOR = "#004200"
const SNAKE_BORDER_COLOR = "#006600"
const APPLE_COLOR = "#FF0000"
const APPLE_BORDER_COLOR = "#820000"
let foodX = 0
let foodY = 0
let snake = [{ x: 300, y: 300 }]
let directionX = 0
let directionY = 0
let score = 0
let highScore = 0
let gameIsOver = false

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      // LEFT
      e.preventDefault()
      changeDirection(e.key)
      break
    case "ArrowUp":
      // UP
      e.preventDefault()
      changeDirection(e.key)
      break
    case "ArrowRight":
      // RIGHT
      e.preventDefault()
      changeDirection(e.key)
      break
    case "ArrowDown":
      // DOWN
      e.preventDefault()
      changeDirection(e.key)
      break
    case " ":
      // SPACEBAR
      e.preventDefault()
      restartGame()
      snake = [{ x: 300, y: 300 }]
      break
  }
})
;(function () {
  document.getElementById("current-score").innerHTML = score
  highScore = localStorage.getItem("high_score")
  if (highScore === null) {
    document.getElementById("high-score").innerHTML = 0
  } else {
    document.getElementById("high-score").innerHTML = highScore
  }
  createRandomApple()
  main()
})()

function main() {
  if (gameIsOver === true) return
  setTimeout(() => {
    growSnake()
    drawEverything()
    checkForSnakeEatingItself()
    checkForSnakeTouchingWall()
    main()
  }, 100)
}

function drawEverything() {
  CONTEXT.fillStyle = CANVAS_BACKGROUND_COLOR
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)

  snake.forEach(drawSnakeSegment)

  CONTEXT.fillStyle = APPLE_COLOR
  CONTEXT.strokesytle = APPLE_BORDER_COLOR
  CONTEXT.fillRect(foodX, foodY, 10, 10)
  CONTEXT.strokeRect(foodX, foodY, 10, 10)
}

function drawSnakeSegment(snakeSegment) {
  CONTEXT.fillStyle = SNAKE_COLOR
  CONTEXT.strokestyle = SNAKE_BORDER_COLOR
  CONTEXT.fillRect(snakeSegment.x, snakeSegment.y, 10, 10)
  CONTEXT.strokeRect(snakeSegment.x, snakeSegment.y, 10, 10)
}

function growSnake() {
  const head = { x: snake[0].x + directionX, y: snake[0].y + directionY }
  snake.unshift(head)

  if (head.x === foodX && head.y === foodY) {
    score++
    document.getElementById("current-score").innerHTML = score
    createRandomApple()
  } else {
    snake.pop()
  }
}

function checkForSnakeEatingItself() {
  for (var i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      gameIsOver = true
      gameOver()
    }
  }
}

function checkForSnakeTouchingWall() {
  if (
    snake[0].x < 0 ||
    snake[0].x >= CANVAS.width ||
    snake[0].y < 0 ||
    snake[0].y >= CANVAS.height
  ) {
    gameIsOver = true
    gameOver()
  }
}

function changeDirection(e) {
  const goingUp = directionY === -10
  const goingDown = directionY === 10
  const goingRight = directionX === 10
  const goingLeft = directionX === -10
  if (e === "ArrowLeft" && !goingRight) {
    directionX = -10
    directionY = 0
  }
  if (e === "ArrowUp" && !goingDown) {
    directionX = 0
    directionY = -10
  }
  if (e === "ArrowRight" && !goingLeft) {
    directionX = 10
    directionY = 0
  }
  if (e === "ArrowDown" && !goingUp) {
    directionX = 0
    directionY = 10
  }
}

function createRandomApple() {
  foodX = Math.floor(Math.random() * 60) * 10
  foodY = Math.floor(Math.random() * 60) * 10

  snake.forEach((snakeSegment) => {
    appleIsOnSnake = snakeSegment.x === foodX && snakeSegment.y === foodY
    if (appleIsOnSnake) {
      createRandomApple()
    }
  })
}

function gameOver() {
  if (score > highScore) {
    highScore = score
    localStorage.setItem("high_score", highScore)
    score = 0
    document.getElementById("current-score").innerHTML = score
    alert("Congratulations!\nYou achieved a new high score!")
  }
  highScore = localStorage.getItem("high_score")
  score = 0
  document.getElementById("current-score").innerHTML = score
  document.getElementById("high-score").innerHTML = highScore
  CONTEXT.fillStyle = CANVAS_BACKGROUND_COLOR
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)
  CONTEXT.fillStyle = "#006600"
  CONTEXT.font = "30px PixelBoy"
  CONTEXT.fillText("Game Over!", 230, 300)
  CONTEXT.fillText("Press the spacebar to play again.", 97, 350)
}

function restartGame() {
  gameIsOver = false
  main()
}
