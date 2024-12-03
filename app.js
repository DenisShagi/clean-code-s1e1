const buttonAdd = document.querySelector("button");
const buttonEdit = document.querySelector(".edit");
const taskList = document.getElementById("incompleteTasks");

function addTask() {
  const inputText = document.querySelector(".task").value;

  const newLi = document.createElement("li");

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

  newLi.textContent = inputText;
  if (inputText.trim() === "") {
    return;
  }
  taskList.insertAdjacentHTML("beforeend", newTaskHTML);

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
    e.target.closest("li")
    const taskItem = e.target.closest('li')
    taskItem.remove()
  }
  
});
