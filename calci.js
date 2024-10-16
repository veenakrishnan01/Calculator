var screen = document.getElementById("screen");
function btnClick(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function findResult() {
  try {
    var result = eval(screen.value);
  } catch (error) {
    screen.value = result;
  }
}
