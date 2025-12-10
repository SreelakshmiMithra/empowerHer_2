// navbar.js - Navigation Component
export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-container">
      <h1 class="navbar-title">TodoApp</h1>
      <ul class="navbar-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="signup.html" id="signup-link">Signup</a></li>
        <li><a href="login.html" id="login-link">Login</a></li>
        <li><a href="#" id="logout-link" style="display:none;">Logout</a></li>
      </ul>
    </div>
  `;
  return nav;
}