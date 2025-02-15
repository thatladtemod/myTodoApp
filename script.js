function addTodo() {
  const inputBoxValue = document.getElementById("inputBox");
  const todoList = document.querySelector(".todoList");
  const message = document.querySelector("p");

  if (inputBoxValue.value === "") {
    message.textContent = "Please, enter a valid task.";

    setTimeout(() => message.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.classList.add("added");
    li.innerHTML = `${inputBoxValue.value} <div><img src="images/delete-button-svgrepo-com.svg" alt=""></div>`;
    todoList.appendChild(li);

    inputBoxValue.value = "";
  }
}
