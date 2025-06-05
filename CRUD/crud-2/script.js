let users = [];

function displayUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user}
      <button onclick="editUser(${index})">Edit</button>
      <button onclick="deleteUser(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addUser() {
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Please enter a name");
    return;
  }
  users.push(name);
  document.getElementById("name").value = "";
  displayUsers();
}

function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}

function editUser(index) {
  const newName = prompt("Edit name:", users[index]);
  if (newName) {
    users[index] = newName.trim();
    displayUsers();
  }
}
