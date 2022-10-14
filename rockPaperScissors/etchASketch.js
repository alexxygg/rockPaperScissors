// const parentSection = document.querySelector("#parent");
function randomRGB() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r},${g},${b})`;
}

// for (let i = 0; i < 17; i++) {
//   const divParent = document.createElement("section");
//   //   divParent.setAttribute("id", `${i}`);
//   document.body.appendChild(divParent);

// for (let i = 1; i < 17; i++) {
//   const divParent = document.createElement("div");
//   divParent.setAttribute("id", `${i}`);
//   document.body.appendChild(divParent);

//   for (let j = 1; j < 17; j++) {
//     const divSon = document.createElement("div");
//     divSon.setAttribute("id", `${j} + 10`);
//     divSon.style.backgroundColor = randomRGB();
//     divSon.innerText = "xx";
//     document.getElementById(`${i}`).appendChild();
//   }
// }

//

const grid = document.querySelector(".grid");
let gridValue = document.querySelector(".grid-size");
let gridSize = document.querySelector("input");
const resetBtn = document.querySelector(".reset");
const applyGridSize = document.querySelector(".apply");
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

// Used event delegation to target children of the grid
grid.addEventListener("mouseover", function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches(".box")) {
    e.target.classList.add("active");
  }
});

gridSize.addEventListener("input", function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener("click", function () {
  reset();
});

resetBtn.addEventListener("click", reset);
