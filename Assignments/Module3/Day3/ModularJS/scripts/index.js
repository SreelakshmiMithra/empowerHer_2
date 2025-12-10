// index.js
import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { auth } from './auth.js';

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
  } else {
    loginLink.style.display = 'block';
    signupLink.style.display = 'block';
    logoutLink.style.display = 'none';
  }
};

updateNavbar();

const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    auth.logout();
    updateNavbar();
    window.location.href = 'index.html';
  });
}