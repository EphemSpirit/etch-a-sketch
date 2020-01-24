const container = document.getElementById("container");

// let size = prompt("How many squares epr side would you like?");

function makeGrid (size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (c = 0; c < (size ** 2); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(16);

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
    gridItem.style.backgroundColor = '';
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
