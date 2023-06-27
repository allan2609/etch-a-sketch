const sketchpad = document.querySelector(".sketchpad");
const drawButton = document.querySelector("#drawbutton");

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

function draw() {
  let numberOfSquares = document.querySelector("#squares-number").value;
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
};

function clear() {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild)
  }
  document.querySelector("#squares-number").textContent = "";
};
