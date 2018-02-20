function displayEditForm() {
  const buttons = document.querySelectorAll(".update_button");
  const updateForm = document.querySelectorAll(".update_form");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      button.childNodes[3].classList.toggle("invisible");
    });
  })
}

export { displayEditForm };
