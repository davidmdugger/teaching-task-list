// DOM NODES
const form = document.getElementById("task-form");
const taskList = document.querySelector(".items");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");

// LOAD EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // ADD TASK
  form.addEventListener("submit", addTask);

  // REMOVE TASK
  taskList.addEventListener("click", removeTask);

  // CLEAR ALL TASKS
  clearBtn.addEventListener("click", clearTasks);

  // FILTER TASKS
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value.trim() === "") {
    alert("Task can't be empty");
  } else {
    // CREATE LI
    const li = document.createElement("li");
    li.className = "item slide-in";
    li.appendChild(document.createTextNode(taskInput.value));

    // CREATE LINK
    const link = document.createElement("a");
    link.className = "delete-item";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // APPEND LINK TO LI
    appendElements(li, link);

    // APPEND LI TO UL
    appendElements(taskList, li);

    // CLEAR INPUT
    taskInput.value = "";
  }
}

appendElements = (a, b) => a.appendChild(b);

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.classList.remove("item");
    e.target.parentElement.parentElement.classList.add("remove-item");
    setTimeout(function() {
      e.target.parentElement.parentElement.remove("item");
    }, 1000);
  }
}

// CLEAR TASKS
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  console.log("text: ", text);

  document.querySelectorAll(".item").forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "flex";
      task.classList.add("item");
    } else {
      task.style.display = "none";
    }
  });
}
