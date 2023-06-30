const sketchpad = document.querySelector(".sketchpad");
const drawButton = document.querySelector("#drawbutton");
const output = document.querySelector("#squares-output");
const slider = document.querySelector("#squares-number");

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

slider.addEventListener("input", () => {
  const userSelection = document.querySelector("#squares-number").value;
  output.textContent = `Squares per side: ${userSelection}`;
});

sketchpad.addEventListener("click", (e) => {
  let opacity = Number(e.target.style.opacity);
  if (opacity > 0) {
    e.target.style.opacity = opacity - 0.2;
  } else {
    e.target.style.opacity = 1;
  }
});

function draw() {
  const numberOfSquares = document.querySelector("#squares-number").value;
  const userSelection = document.querySelector("#squares-number").value;
  output.textContent = `Squares per side: ${userSelection}`;
  for (let i = 0; i < numberOfSquares; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < numberOfSquares; j++) {
        let row = document.createElement("div");
        row.style.backgroundColor = "white";
        row.style.opacity = "1";
        row.className = "row";
        column.appendChild(row);
    }
    sketchpad.appendChild(column);
  }
  createBorders();
  sketchpad.style.backgroundColor = "black";
};

function createBorders() {
  const squares = document.querySelectorAll(".row");
  const size = squares.length;
  for (let i = 0; i < size; i++) {
    let box = squares[i];
    box.style.borderRight = ("1px solid black");
    box.style.borderBottom = ("1px solid black");
    }
  sketchpad.style.borderTop = ("1px solid black");
  sketchpad.style.borderLeft = ("1px solid black");
};

function clear() {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
  document.querySelector("#squares-number").textContent = "";
};

draw();
