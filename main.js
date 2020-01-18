let container = document.querySelector(".container");
// let rowCell = document.createElement("div");
// rowCell.setAttribute("class", "row");
// rowCell.style.width = (rows/960);
// rowCell.style.height = 50;

function makeRows (rows) {
  rows = prompt("How many rows do you want?");
  for (let i = 0; i < rows; i++) {
    rowCell = dicument.createElement("div");
    rowCell.setAttribute("class", "row");
    rowCell.style.width = (rows/960);
    rowCell.style.height = 50;
    container.appendChild(rowCell);
  }
}
