var deletedTasks = [];

function createDeleteButton(listItem) {
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.onclick = function() {
        deletedTasks.push(listItem.innerText);
        listItem.parentNode.removeChild(listItem);
    };
    return deleteButton;
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }
    
    var listItem = document.createElement("li");
    listItem.innerText = taskInput.value;
    
    var deleteButton = createDeleteButton(listItem);
    
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    
    taskInput.value = "";
}

function undo() {
    if (deletedTasks.length === 0) {
        alert("No tasks to undo.");
        return;
    }
    
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerText = deletedTasks.pop();
    
    var deleteButton = createDeleteButton(listItem);
    
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}
