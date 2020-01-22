const container = document.getElementById("container");

function makeGrid (rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(30, 30);

let gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = 'black';
  });
});

let resetButton = document.querySelector("#reset-btn");

resetButton.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white';
  });
});
// gridItem.onmouseover = function () {
//   this.style.backgroundColor = 'black';
// }
