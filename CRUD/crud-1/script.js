let names = [];
let editIndex = -1;

function addName() {
    debugger
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  if (editIndex === -1) {
    names.push(name);
  } else {
    names[editIndex] = name;
    editIndex = -1;
  }

  nameInput.value = "";
  renderList();
}

function renderList() {
    debugger
  const ul = document.getElementById("nameList");
  ul.innerHTML = "";

  names.forEach((name, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${name}
      <button class="edit" onclick="editName(${index})">Edit</button>
      <button class="delete" onclick="deleteName(${index})">Delete</button>
    `;
    ul.appendChild(li);
  });
}

function editName(index) {
    debugger
  document.getElementById("nameInput").value = names[index];
  editIndex = index;
}

function deleteName(index) {
    debugger
  names.splice(index, 1);
  renderList();
}
