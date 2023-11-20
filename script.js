let drawingBoxesContainer = document.getElementById("drawingBoxesContainer");

let resetButton = document.getElementById("resetButton");

let userDivChoice = 273;
let userColourChoice = "red";

const generateDivs = (userDivChoice) => {
  for (let i = 0; i < userDivChoice; i++) {
    let drawingContainer = document.createElement("div");
    drawingContainer.classList = `drawingContainer drawingContainer${i}`;

    drawingBoxesContainer.appendChild(drawingContainer);

    drawingContainer.addEventListener("mouseover", function () {
      drawingContainer.style.backgroundColor = userColourChoice;
    });
  }
};

generateDivs(userDivChoice);

resetButton.addEventListener("click", function () {
  location.reload();
});
