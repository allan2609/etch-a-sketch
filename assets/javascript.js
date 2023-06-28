const sketchpad = document.querySelector(".sketchpad");
const drawButton = document.querySelector("#drawbutton");

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

function draw() {
  const numberOfSquares = document.querySelector("#squares-number").value;
  for (let i = 0; i < numberOfSquares; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < numberOfSquares; j++) {
        let row = document.createElement("div");
        row.className = "row";
        column.appendChild(row);
    }
    sketchpad.appendChild(column);
  }
  createBorders();
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
    sketchpad.removeChild(sketchpad.firstChild)
  }
  document.querySelector("#squares-number").textContent = "";
};
