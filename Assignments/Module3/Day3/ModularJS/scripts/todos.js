// scripts/todosPage.js - Fetch and Display Todos from API
import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { auth } from './auth.js';
import { displayTodos, fetchTodosFromAPI } from './displayTodos.js';

// Check if user is logged in
if (!auth.isLoggedIn()) {
  window.location.href = 'index.html';
}

document.getElementById('navbar-container').appendChild(createNavbar());
document.getElementById('footer-container').appendChild(createFooter());

const updateNavbar = () => {
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  const logoutLink = document.getElementById('logout-link');
  
  if (auth.isLoggedIn()) {
    loginLink.style.display = 'none';
    signupLink.style.display = 'none';
    logoutLink.style.display = 'block';
  }
};

updateNavbar();

const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    auth.logout();
    window.location.href = 'index.html';
  });
}

// Fetch and display todos from API on page load
async function loadTodos() {
  const todos = await fetchTodosFromAPI();
  await displayTodos(todos);
  
  // Add checkbox toggle functionality
  document.getElementById('todos-container').addEventListener('change', (e) => {
    if (e.target.classList.contains('todo-checkbox')) {
      const todoItem = e.target.closest('.todo-item');
      if (e.target.checked) {
        todoItem.classList.add('completed');
      } else {
        todoItem.classList.remove('completed');
      }
    }
  });
}

// Load todos when page loads
loadTodos();