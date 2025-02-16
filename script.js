const inputBoxValue = document.getElementById("inputBox")
const todoList = document.querySelector(".todoList")
const message = document.querySelector("p")

function addTodo() {

  if (inputBoxValue.value === "") {
    message.textContent = "Please, enter a valid task."
  } else {
    const li = document.createElement("li")
    li.classList.add("added")
    li.innerHTML = `${inputBoxValue.value} <div class="delete"><img src="images/delete-button-svgrepo-com.svg" alt=""></div>`;
    todoList.appendChild(li)

    message.remove()

    li.querySelector(".delete").addEventListener("click", deletetask)

  }

    inputBoxValue.value = ""
    saveData()
}

function deletetask(e) {
  const deleteButton = e.target.closest(".delete")
  const listItem = deleteButton.closest("li")
  listItem.remove()
  saveData()
}

function saveData() {
  localStorage.setItem("data", todoList.innerHTML)
}

function displayItems() {
  todoList.innerHTML = localStorage.getItem("data")
  const deleteButtons = todoList.querySelectorAll(".delete")
  deleteButtons.forEach(button => {
    button.addEventListener("click", deletetask)
  })
}

displayItems()