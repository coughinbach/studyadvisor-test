function initChangeColorsOnClick() {
  const button = document.querySelector(".color_button");
  const study = document.querySelectorAll(".study");
  const advisor = document.querySelectorAll(".advisor");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    study.forEach((i) => {
      i.classList.toggle("blue");
    });
    advisor.forEach((i) => {
      i.classList.toggle("red");
    });
  });
}

export { initChangeColorsOnClick };
