var colors = ["red", "blue", "green", "yellow"];
var box = document.getElementById("box");
var currentColorIndex = 0;
var themeMode = "light";

function changeBoxColor() {
  box.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex++;
  if (currentColorIndex >= colors.length) {
    currentColorIndex = 0;
  }
}

function resetBoxColor() {
  box.style.backgroundColor = "gray";
}

function changeTheme() {
  if (themeMode === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    box.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    box.style.backgroundColor = "gray";
  }
}

document.getElementById("changeBtn").addEventListener("click", changeBoxColor);

document.getElementById("resetBtn").addEventListener("click", resetBoxColor);

document.getElementById("themeBtn").addEventListener("click", function() {
  themeMode = (themeMode === "light") ? "dark" : "light";
  changeTheme();
});