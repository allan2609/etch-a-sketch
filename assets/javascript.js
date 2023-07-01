const sketchpad = document.querySelector(".sketchpad");
const drawButton = document.querySelector("#drawbutton");
const size = document.querySelector("#squares-output");
const slider = document.querySelector("#squares-number");

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

slider.addEventListener("input", () => {
  const userSelection = document.querySelector("#squares-number").value;
  size.textContent = `Size: ${userSelection}`;
});

function draw() {
  const numberOfSquares = document.querySelector("#squares-number").value;
  size.textContent = `Size: ${numberOfSquares}`;
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < numberOfSquares; j++) {
        const row = document.createElement("div");
        row.style.backgroundColor = "white";
        row.style.opacity = "1";
        row.className = "row";
        row.addEventListener("mouseover", paint);
        row.addEventListener("touchstart", paint);
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

function paint(e) {
  const opacity = Number(e.target.style.opacity);
  const color = document.querySelector("#color").value;
  if (opacity > 0 && color === "#000000") {
    e.target.style.opacity = opacity - 0.2;
  } else if (opacity <= 0 && color === "#000000") {
    e.target.style.opacity = 0;
  } else if (color !== "#000000") {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = color;
  } else {
    e.target.style.opacity = 1;
    console.log("Something unexpected happened.")
  }
};

function clear() {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
};

draw();
