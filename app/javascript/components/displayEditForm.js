function displayEditForm() {
  // const buttons = document.querySelectorAll(".update_button");
  // const updateForm = document.querySelectorAll(".update_form");

  // buttons.forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const student = button.parentNode.parentNode;
  //     student.childNodes[3].classList.toggle("invisible");
  //   });
  // })
  // const students = document.querySelectorAll('.student');

  // students.forEach((student) => {
  //   student.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     console.log(student);
  //     if (event.target.classList.contains('fa')) {
  //       console.log("hi")

  //       student.childNodes[5].classList.toggle("invisible");
  //     }
  //   })
  // })

  const students = document.getElementById("students");


    students.addEventListener("click", function (event) {
      event.preventDefault();
      const editBox = event.target.parentNode.parentNode.parentNode.childNodes[5];
      editBox.classList.toggle("invisible");
    })
}

export { displayEditForm };
