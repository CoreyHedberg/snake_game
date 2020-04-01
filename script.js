// to set the game as hidden.
// https://www.w3schools.com/jsref/prop_style_visibility.asp

window.onload = () => {
  document.getElementById("game-area").style.visibility = "hidden";
};

document.getElementById("play-button").addEventListener("click", () => {
  document.getElementById("game-area").style.visibility = "visible";
});
