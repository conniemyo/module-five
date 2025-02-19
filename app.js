var colors = ["red", "blue", "green", "yellow"];
var box = document.getElementById("box");
var mode = "light";

function changeBoxColor() {
  for (var i = 0; i < colors.length; i++) {
    box.style.backgroundColor = colors[i];
  }
}

function resetBoxColor() {
  var i = colors.length - 1;
  while (i >= 0) {
    box.style.backgroundColor = "gray";
    i--;
  }
}

function toggleMode() {
  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    box.style.backgroundColor = "gray";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    box.style.backgroundColor = "blue";
  }
}

document.getElementById("changeBtn").addEventListener("click", changeBoxColor);
document.getElementById("resetBtn").addEventListener("click", resetBoxColor);
document.getElementById("modeBtn").addEventListener("click", toggleMode);