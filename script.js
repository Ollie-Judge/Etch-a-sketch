let drawingBoxesContainer = document.getElementById("drawingBoxesContainer");

let userDivChoice = 273;
let userColourChoice = "red";

const generateDivs = (userDivChoice) => {
  for (let i = 0; i < userDivChoice; i++) {
    let drawingContainer = document.createElement("div");
    drawingContainer.classList = `drawingContainer drawingContainer${i}`;

    drawingBoxesContainer.appendChild(drawingContainer);

    drawingContainer.addEventListener("click", function () {
      drawingContainer.style.backgroundColor = userColourChoice;
    });

    //div.classname = "block";
  }
};

generateDivs(userDivChoice);

// once divs are created, just add a click event to all of the divs so that when each one is clicked, you then colour the div the colour you selected

// for (let i = 0; i < 16; i++) {
//   console.log(i);
// }
