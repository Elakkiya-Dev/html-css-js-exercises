// Load notes on page load
document.addEventListener("DOMContentLoaded", showNotes);

function addNote() {
    debugger
  let title = document.getElementById("title").value.trim();
  let note = document.getElementById("note").value.trim();

  if (!title || !note) {
    alert("Please enter title and note.");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push({ title, note });
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("title").value = "";
  document.getElementById("note").value = "";

  showNotes();
}

function showNotes() {
    debugger
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  let notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    notesDiv.innerHTML += `
      <div class="note">
        <h4>${note.title}</h4>
        <p>${note.note}</p>
        <button onclick="deleteNote(${index})">🗑 Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
    debugger
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
