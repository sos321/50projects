const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

todosUl.innerHTML = "";

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (!todoText) return;

  const todoEl = document.createElement("li");
  todoEl.innerText = todoText;

  if (todo && todo.completed) todoEl.classList.add("completed");

  todoEl.addEventListener("click", () => {
    todoEl.classList.toggle("completed");
    updateLS();
  });

  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    todoEl.remove();
    updateLS();
  });

  todosUl.appendChild(todoEl);

  input.value = "";

  updateLS();
}

function updateLS() {
  const todoEls = document.querySelectorAll("li");

  const todosLS = [];

  todoEls.forEach((todoEl) => {
    todosLS.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todosLS));
}
