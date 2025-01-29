const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
updateStorage();

creatBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "image/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);

  //   img.addEventListener("click", () => {
  //     notesContainer.removeChild(inputBox);
  //   });
});

//Another way of Deleting Note
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
