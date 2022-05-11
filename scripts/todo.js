let taskInput = document.getElementById("input-task")
let addBtn = document.getElementById("btn-add")



let todoArr = []
let currentUser = getFromStorage("LoginUser") || null

function addTaskBtn() {
    let data = new Task(taskInput.value, currentUser.userName, isDone=false)
    console.log(data);
    validateTaskData(data)
}

function validateTaskData(todo) {
    if (!todo.task) {
        alert("Please type task!")
    }
}

addBtn.addEventListener("click", addTaskBtn)

