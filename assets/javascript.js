const sketchpad = document.querySelector(".sketchpad");
const tile = document.createElement("div");
const drawButton = document.querySelector("#drawbutton");
let tileSize = 16;

drawButton.addEventListener("click", () => {
  clear();
  draw();
});

tile.setAttribute("style", "background: white; width: 16px; height: 16px; border: 1px solid black");  

function draw() {
  let numberOfVerticalTiles = document.querySelector("#verticalsize").value;
  let numberOfHorizontalTiles = document.querySelector("#horizontalsize").value;
  let sketchpadVerticalSize = tileSize * numberOfVerticalTiles;
  let sketchpadHorizontalSize = tileSize * numberOfHorizontalTiles;
  console.log("horizontal size in px: " + sketchpadHorizontalSize);
  console.log("number of columns: " + numberOfHorizontalTiles);
  for (let i = 0; i < numberOfHorizontalTiles * numberOfVerticalTiles; i++) {
        sketchpad.setAttribute("style", `height: ${sketchpadVerticalSize}px; width: ${sketchpadHorizontalSize}px`);
    sketchpad.appendChild(tile.cloneNode(true));
  }
};

function clear() {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild)
  }
  document.querySelector("#verticalsize").textContent = "";
  document.querySelector("#horizontalsize").textContent = "";
};
