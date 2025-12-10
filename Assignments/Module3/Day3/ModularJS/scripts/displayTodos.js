// scripts/displayTodos.js - Display Todos from API
export async function displayTodos(data) {
  const container = document.getElementById('todos-container');
  if (!container) return;
  
  container.innerHTML = '<p class="loading">Loading todos...</p>';
  
  try {
    // If data is not provided, fetch from API
    let todos = data;
    if (!data || data.length === 0) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      todos = await response.json();
    }
    
    container.innerHTML = '';
    
    if (todos.length === 0) {
      container.innerHTML = '<p class="empty-message">No todos available.</p>';
      return;
    }
    
    // Display first 10 todos
    const todoList = document.createElement('ul');
    todoList.className = 'todos-list';
    
    todos.slice(0, 10).forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
        <span class="todo-text">${todo.title}</span>
        <span class="todo-id">#${todo.id}</span>
      `;
      todoList.appendChild(li);
    });
    
    container.appendChild(todoList);
  } catch (error) {
    container.innerHTML = `<p class="error">Error loading todos: ${error.message}</p>`;
    console.error('Error fetching todos:', error);
  }
}

// Function to fetch todos from API
export async function fetchTodosFromAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
}