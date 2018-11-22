// DOM NODES
const form = document.getElementById("task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");

// LOAD EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // ADD TASK
  form.addEventListener("submit", addTask);
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value.trim() === "") {
    alert("Task can't be empty");
  } else {
    // CREATE LI
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    // CREATE LINK
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // APPEND LINK TO LI
    li.appendChild(link);

    // APPEND LI TO UL
    taskList.appendChild(li);
  }
}
