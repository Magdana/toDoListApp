const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-tasl-btn");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    alert("enter a task text");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete-btn");
  listItem.appendChild(deleteButton);

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    listItem.remove();
  });

  taskList.appendChild(listItem);
  newTaskInput.value = "";
}
