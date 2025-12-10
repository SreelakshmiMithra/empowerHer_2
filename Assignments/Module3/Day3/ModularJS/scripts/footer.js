
// footer.js - Footer Component
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-container">
      <p>&copy; 2024 TodoApp. All rights reserved.</p>
      <p>Built with modular JavaScript</p>
    </div>
  `;
  return footer;
}