// Load tasks on page load
let tasks = JSON.parse(localStorage.getItem("todos")) || [];
renderTasks();

// Add Task
document.getElementById("addBtn").addEventListener("click", function () {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    let task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem("todos", JSON.stringify(tasks));
    
    input.value = "";
    renderTasks();
});

// Render Tasks
function renderTasks(filteredTasks = tasks) {
    let ul = document.getElementById("taskList");
    ul.innerHTML = "";

    filteredTasks.forEach(task => {
        let li = document.createElement("li");

        // Task text
        let span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.classList.add("completed");

        // Complete button
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.onclick = () => toggleComplete(task.id);

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.onclick = () => deleteTask(task.id);

        li.append(span, completeBtn, deleteBtn);
        ul.appendChild(li);
    });
}

// Toggle Completion
function toggleComplete(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("todos", JSON.stringify(tasks));
    renderTasks();
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("todos", JSON.stringify(tasks));
    renderTasks();
}

// Search Functionality
document.getElementById("searchInput").addEventListener("input", function () {
    let searchText = this.value.toLowerCase();

    let filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(searchText)
    );

    renderTasks(filtered);
});
