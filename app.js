
const buttonAdd = document.querySelector('button');

function addTask(){
    const inputText = document.querySelector('.task').value;
    const taskList = document.getElementById('incompleteTasks')
    const newLi = document.createElement('li')

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
    `

    newLi.textContent = inputText
   taskList.insertAdjacentHTML('beforeend', newTaskHTML);
}

buttonAdd.addEventListener('click', addTask)