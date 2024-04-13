document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo_form");
  const todoInput = document.querySelector(".todo_input");
  const todoList = document.querySelector(".todo_list");
  const todoSubmit = document.querySelector(".todo-submit");
  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addtodoItem(todoText);
      }

      todoItem.value = "";
    } else {
      alert("please enter valid task");
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "Delete") {
        todoItem.remove();
      } else if (target.innerText === "Edit") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addtodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = "Edit";
    removeButton.innerText = "Delete";

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
