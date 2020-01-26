const container = document.getElementById("container");

//default grid
function makeGrid (size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (c = 0; c < (size ** 2); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(54);

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

let resizeButton = document.querySelector("#resize-btn");
resizeButton.addEventListener("click", () => {
  const newSize = prompt("How many squares per side would you like?");
  makeGrid(newSize);
});

let makeRed = document.querySelector("#make-red");
makeRed.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = '#b30000';
    });
  });
});

let makeBlack = document.querySelector("#black-btn");
makeBlack.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = 'black';
    });
  });
});

function getRandomColor () {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let randomButton = document.querySelector("#random-clr");
randomButton.addEventListener("click", () => {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = getRandomColor();
    });
  });
});
