const buttonAdd = document.querySelector("button");
const buttonEdit = document.querySelector(".edit");

const taskList = document.getElementById("incompleteTasks");
const completedTask = document.getElementById("completed-tasks");

function addTask() {
  const inputElement = document.querySelector(".task");
  const inputText = inputElement.value;

  const newTaskHTML = `
       <li>
              <input type='checkbox'>
              <label class="task">${inputText}</label>
              <input type="text" class="task">
              <button class="edit">Edit</button>
              <button class="delete">
                  <img src="./remove.svg">
              </button>
          </li>
      `;

  if (inputText.trim() === "") {
    return;
  }

  taskList.insertAdjacentHTML("beforeend", newTaskHTML);

  inputElement.value = "";
}

buttonAdd.addEventListener("click", addTask);

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const taskItem = e.target.closest("li");
    const label = taskItem.querySelector("label");
    const input = taskItem.querySelector('input[type="text"]');
    if (taskItem.classList.contains("editMode")) {
      taskItem.classList.remove("editMode");
      e.target.textContent = "Edit";

      if (input.value.trim() !== "") {
        label.textContent = input.value;
      }
    } else {
      taskItem.classList.add("editMode");
      e.target.textContent = "Save";
      input.value = label.textContent;
    }
  }

  if (e.target.closest("button.delete")) {
    e.target.closest("li");
    const taskItem = e.target.closest("li");
    taskItem.remove();
  }

  if (e.target.closest('input[type="checkbox"]')) {
    const taskItem = e.target.closest("li");
    if (e.target.checked) {
      taskItem.remove();
      completedTask.appendChild(taskItem);
    }
  }
});

completedTask.addEventListener("click", (e) => {
  if (e.target.closest("button.delete")) {
    const taskItem = e.target.closest("li");
    taskItem.remove();
  }
});
