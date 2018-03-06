console.log("hello from change")

function initChangeColorsOnClick() {
  const colorButton = document.getElementById("colorButton");
  const study = document.querySelectorAll(".study");
  const advisor = document.querySelectorAll(".advisor");

  console.log(colorButton);

  if (colorButton != null) {
    colorButton.addEventListener("click", (event) => {
      event.preventDefault();
      study.forEach((i) => {
        i.classList.toggle("blue");
      });
      advisor.forEach((i) => {
        i.classList.toggle("red");
      });
    });
  }
}

export { initChangeColorsOnClick };
