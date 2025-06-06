const addNotesBtn = document.getElementById("addNotesBtn");
let notesContainer = document.querySelector(".notes-container");

window.onload = () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  addBlurEventToNotes();
};

addNotesBtn.addEventListener("click", () => {
  let createNotes = document.createElement("p");
  let deleteNotes = document.createElement("img");

  deleteNotes.src = "/images/delete.png";

  createNotes.className = "note";
  createNotes.textContent = "new notes.......";
  createNotes.contentEditable = "true";


  notesContainer.appendChild(createNotes).appendChild(deleteNotes);
  saveNotes();

  deleteNotes.addEventListener("click", ()=>{
    createNotes.remove();
    saveNotes();
  })
});

function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function addBlurEventToNotes() {
  const notes = document.querySelectorAll(".note");
  notes.forEach(note => note.addEventListener("blur", saveNotes));
}
