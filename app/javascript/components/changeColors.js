function initChangeColorsOnClick() {
  const button = document.getElementById("button");
  const study = document.querySelectorAll(".study");
  const advisor = document.querySelectorAll(".advisor");

  button.addEventListener("click", (event) => {
    study.forEach((i) => {
      i.classList.add("blue");
    });
    advisor.forEach((i) => {
      i.classList.add("red");
    });
  });
}

export { initChangeColorsOnClick };
