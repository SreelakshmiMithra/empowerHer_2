// ==============================
// TODO APP LOGIC
// ==============================

// Fetch todos from API
async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const first20 = todos.slice(0, 20); // Only first 20 todos
        storeTodos(first20);
        renderTodos();
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

// Store todos in Local Storage
function storeTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Get todos from Local Storage
function getTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

// Delete a todo by ID
function deleteTodo(id) {
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.id !== id);
    storeTodos(todos);
    renderTodos();
}

// Toggle todo completion status
function toggleComplete(id) {
    const todos = getTodosFromLocalStorage();
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
    });
    storeTodos(todos);
    renderTodos();
}

// Render todos on UI
function renderTodos() {
    const container = document.getElementById('todo-container');
    const todos = getTodosFromLocalStorage();
    container.innerHTML = '';

    if (todos.length === 0) {
        container.innerHTML = '<p>No Todos Available</p>';
        return;
    }

    todos.forEach(todo => {
        const div = document.createElement('div');
        div.classList.add('todo-item');
        if (todo.completed) div.classList.add('completed');

        div.innerHTML = `
            <span>${todo.title}</span>
            <div>
                <button class="toggle-btn" onclick="toggleComplete(${todo.id})">
                    ${todo.completed ? 'Mark Pending' : 'Mark Complete'}
                </button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
        container.appendChild(div);
    });
}

// ==============================
// INITIALIZE APP
// ==============================
if (getTodosFromLocalStorage().length === 0) {
    fetchTodos();
} else {
    renderTodos();
}