let canvas = document.getElementById("game-canvas");
let canvasContext = canvas.getContext("2d");
canvasContext.fillStyle = "black";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      // left key pressed
      e.preventDefault();
      console.log(`left`);
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

document
  .getElementById("place-apple")
  .addEventListener("click", placeRandomApple);

function placeRandomApple() {
  let randomX = Math.floor(Math.random() * canvas.width + 1);
  console.log(`randomX : ${randomX}`);
  let randomY = Math.floor(Math.random() * canvas.height + 1);
  console.log(`randomY : ${randomY}`);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(randomX, randomY, 10, 10);
}
