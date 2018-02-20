function displayEditForm() {
  const buttons = document.querySelectorAll(".update_button");
  const updateForm = document.querySelectorAll(".update_form");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const student = button.parentNode;
      student.childNodes[5].classList.toggle("invisible");
    });
  })
}

export { displayEditForm };
