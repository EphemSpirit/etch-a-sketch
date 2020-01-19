const container = document.getElementById("container");

function makeGrid (rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(16, 16);

let gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("onmouseover", () => {
    gridItem.style.backgroundColor = 'black';
  });
});


// gridItem.onmouseover = function () {
//   this.style.backgroundColor = 'black';
// }
