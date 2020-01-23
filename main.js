const container = document.getElementById("container");

let size = prompt("How many squares epr side would you like?");

function makeGrid (rows, cols) {
  rows  = size;
  cols = size;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid();

let gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = 'black';
  });
});


//buttons
let resetButton = document.querySelector("#reset-btn");

resetButton.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white';
  });
});

let makeRed = document.querySelector("#make-red");
makeRed.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = 'red';
    });
  });
});
// gridItem.onmouseover = function () {
//   this.style.backgroundColor = 'black';
// }
