const sketchpad = document.querySelector(".sketchpad");
const tile = document.createElement("div");
const drawButton = document.querySelector("#drawbutton");

drawButton.addEventListener("click", () => {
  draw();
});

tile.setAttribute("style", "background: white; width: 16px; height: 16px; border: 1px solid black");  
const numberOfVerticalTiles = document.querySelector("#verticalsize").value;
const numberOfHorizontalTiles = document.querySelector("#horizontalsize").value;
const tileSize = 16;

function draw() {
  let sketchpadVerticalSize = tileSize * numberOfVerticalTiles;
  let sketchpadHorizontalSize = tileSize * numberOfHorizontalTiles;
  console.log("hor size in px: " + sketchpadHorizontalSize);
  console.log("number of hor tiles: " + numberOfHorizontalTiles);
  console.log("tylesize: " + tileSize)
  for (let i = 0; i < numberOfHorizontalTiles * numberOfVerticalTiles; i++) {
        sketchpad.setAttribute("style", `height: ${sketchpadVerticalSize}px; width: ${sketchpadHorizontalSize}px`);
    sketchpad.appendChild(tile.cloneNode(true));
  }
};

function clear() {
  
};
