let canvas; // Used for handle on the information about the dimensions
let canvasContext; // Underlying graphical information to draw to

canvas = document.getElementById("game-canvas");
canvasContext = canvas.getContext("2d");
canvasContext.fillStyle = "black";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);
/* canvasContext.fillStyle = "#00205b";
canvasContext.fillRect(100, 200, 10, 10); */

document.getElementById("place-apple").addEventListener("click", placeApple);

function placeApple() {
  let randomX = Math.floor(Math.random() * canvas.width + 1);
  console.log(`randomX : ${randomX}`);
  let randomY = Math.floor(Math.random() * canvas.height + 1);
  console.log(`randomY : ${randomY}`);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(randomX, randomY, 10, 10);
}
