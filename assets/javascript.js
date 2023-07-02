const sketchpad = document.querySelector(".sketchpad");
const drawButton = document.querySelector("#drawbutton");
let size = document.querySelector("#squares-output");
const slider = document.querySelector("#squares-number");
const modalContent = document.querySelector(".modal-content");
const blurBg = document.querySelector(".blur-bg");
const popup = document.querySelector(".squares-popup");

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

size.addEventListener("click", sizeEntry);

slider.addEventListener("input", () => {
  const userSelection = document.querySelector("#squares-number").value;
  document.querySelector("#squares-output").textContent = `Size: ${userSelection}`;
});

popup.addEventListener("change", readSize);

function draw() {
  console.log("Start function draw");
  const numberOfSquares = document.querySelector("#squares-number").value;
  document.querySelector("#squares-output").textContent = `Size: ${numberOfSquares}`;
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < numberOfSquares; j++) {
        const row = document.createElement("div");
        row.style.backgroundColor = "white";
        row.style.opacity = "1";
        row.className = "row";
        row.addEventListener("mouseover", paint);
        column.appendChild(row);
    }
    sketchpad.appendChild(column);
  }
  createBorders();
  sketchpad.style.backgroundColor = "black";
};

function createBorders() {
  console.log("Start function createBorders");
  const squares = document.querySelectorAll(".row");
  const squaresCount = squares.length;
  for (let i = 0; i < squaresCount; i++) {
    let box = squares[i];
    box.style.borderRight = ("1px solid black");
    box.style.borderBottom = ("1px solid black");
    }
  sketchpad.style.borderTop = ("1px solid black");
  sketchpad.style.borderLeft = ("1px solid black");
};

function paint(e) {
  console.log("Start function paint(e)");
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
  console.log("Start function clear");
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
};

function sizeEntry() {
  console.log("Start function sizeEntry");
  const userInput = document.querySelector(".squares-popup");
  modalContent.classList.remove("hidden-modal");
  blurBg.classList.remove("hidden-blur");
  if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    safariFocus();
  } else {
    window.setTimeout(() => userInput.focus(), 0);
  }
};

function readSize() {
  console.log("Start function readSize");
  const userInput = document.querySelector(".squares-popup");
  if (userInput.value > 100) {
    console.log("readSize = 100");
    size = 100;
    updateSize();
  } else if (userInput.value < 2) {
    console.log("readSize = 2");
    size = 2;
    updateSize();
  } else if (userInput.value >= 2 && userInput.value <= 100) {
    size = Number(userInput.value);
    console.log("readSize = " + Number(userInput.value));
    updateSize();
  } else {
    console.log("Error");
  }
};

function updateSize() {
  console.log("Start function updateSize");
  console.log("Updated size is: " + size)
  slider.textContent = size;
  slider.value = size;
  document.querySelector("#squares-output").textContent = `Size: ${size}`;
};

function closeModalFunction() {
  console.log("Start function closeModal");
  modalContent.classList.add("hidden-modal");
  blurBg.classList.add("hidden-blur");
};

function safariFocus() {

  // create invisible dummy input to receive the focus first
  const fakeInput = document.createElement("input");
  fakeInput.setAttribute("type", "text");
  fakeInput.style.position = "absolute";
  fakeInput.style.opacity = 0;
  fakeInput.style.height = 0;
  fakeInput.style.fontSize = "16px"; // disable auto zoom

  // you may need to append to another element depending on the browser's auto 
  // zoom/scroll behavior
  document.body.prepend(fakeInput);

  // focus so that subsequent async focus will work
  fakeInput.focus();

  setTimeout(() => {

    // now we can focus on the target input
    window.setTimeout(() => userInput.focus(), 0);

    // cleanup
    fakeInput.remove();
    
  }, 1000);
};

blurBg.addEventListener("click", closeModalFunction);

draw();
