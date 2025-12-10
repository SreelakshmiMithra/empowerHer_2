// login.js
import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { auth } from './auth.js';

document.getElementById('navbar-container').appendChild(createNavbar());
document.getElementById('footer-container').appendChild(createFooter());

const form = document.getElementById('login-form');
const messageEl = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const result = auth.login(email, password);
  
  if (result.success) {
    messageEl.style.color = 'green';
    messageEl.textContent = result.message;
    form.reset();
    
    setTimeout(() => {
      window.location.href = 'todos.html';
    }, 1500);
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = result.message;
  }
});