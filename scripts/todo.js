let taskInput = document.getElementById("input-task")
let addBtn = document.getElementById("btn-add")
let todoBody = document.getElementById("todo-list")



let todoArr = getFromStorage("TodoList") || []
let currentUser = getFromStorage("LoginUser") || null

if (currentUser) {
    renderTodo()
}

function addTaskBtn() {
    if (!currentUser) {
        clearForm();
        alert("please login to use this function!")
        return
    }
    let data = new Task(taskInput.value, currentUser.userName, isDone = false)
    if (validateTaskData(data)) {
        todoArr.push(data)
        saveToStorage("TodoList", todoArr)
        clearForm()
        renderTodo()
    }
}

function validateTaskData(todo) {
    if (!todo.task) {
        alert("Please type task!")
        return false
    }
    return true
}

function clearForm() {
    taskInput.value = ""
}

function renderTodo() {
    let todos = todoArr.filter(todo => todo.owner == currentUser.userName)
        .map(todo =>
            `<li onclick="toggleTask(this)" class="${todo.isDone ? 'checked' : ''}">${todo.task}<span class="close" onclick="deleteTask(event, this)">×</span></li>`
        ).join("")
    todoBody.innerHTML = todos
}

function toggleTask(element) {
    if (element.classList.contains("checked")) {
        element.classList.remove("checked")
        for (todo of todoArr) {
            if (todo.owner == currentUser.userName) {
                if (todo.task == element.textContent.substring(0, element.textContent.length - 1)) {
                    todo.isDone = false
                }
            }
        }
    } else {
        element.classList.add("checked")
        for (todo of todoArr) {
            if (todo.owner == currentUser.userName) {
                if (todo.task == element.textContent.substring(0, element.textContent.length - 1)) {
                    todo.isDone = true
                }
            }
        }
    }
    saveToStorage("TodoList", todoArr)
}


addBtn.addEventListener("click", addTaskBtn)

function deleteTask(event, element) {
    for (let i = 0; i < todoArr.length; i++) {
        if (todoArr[i].owner == currentUser.userName) {
            // console.log(element.parentElement.textContent.substring(0, element.parentElement.textContent.length - 1));
            if (todoArr[i].task == element.parentElement.textContent.substring(0, element.parentElement.textContent.length - 1)) {
                console.log("Find that");
                delete todoArr[i]            
            }
        }
    }
    todoArr = todoArr.filter(todo => todo)
    saveToStorage("TodoList", todoArr)
    renderTodo()
    event.stopPropagation()
}