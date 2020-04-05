// to set the game as hidden.
// https://www.w3schools.com/jsref/prop_style_visibility.asp

window.onload = () => {
  document.getElementById("game-area").style.visibility = "hidden";
};

document.getElementById("play-button").addEventListener("click", () => {
  document.getElementById("game-area").style.visibility = "visible";
});

let canvas; // Used for handle on the information about the dimensions
let canvasContext; // Underlying graphical information to draw to

canvas = document.getElementById("game-canvas");
canvasContext = canvas.getContext("2d");
canvasContext.fillStyle = "black";
canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
