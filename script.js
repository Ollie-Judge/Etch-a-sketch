const drawingBoxesContainer = document.getElementById("drawingBoxesContainer");

const resetButton = document.getElementById("resetButton");

let userDivChoice = 273;
let userColourChoice;

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

function changecolor(el) {
  userColourChoice = el.value;
}

resetButton.addEventListener("click", function () {
  location.reload();
});
