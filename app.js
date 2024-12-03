
const buttonAdd = document.querySelector('button');

function addTask(){
    const inputText = document.querySelector('.task').value;
    const taskList = document.getElementById('incompleteTasks')
    const newLi = document.createElement('li')
    console.log(newLi)
    newLi.textContent = inputText
    taskList.appendChild(newLi)
}

buttonAdd.addEventListener('click', addTask)