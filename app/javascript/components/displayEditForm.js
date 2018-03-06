function displayEditForm() {
  console.log("hello from display")

  const students = document.getElementById("students");
  console.log(students);
  if (students != null) {
    students.addEventListener("click", function (event) {
      if (event.target.classList.contains("fa")) {
        const editBox = event.target.parentNode.parentNode.childNodes[5];
        editBox.classList.toggle("invisible");
      }
    })
  }
}

export { displayEditForm };
