// app.js
import { db } from './config.js';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const booksContainer = document.getElementById("booksContainer");
const addBookForm = document.getElementById("addBookForm");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalPrice = document.getElementById("modalPrice");

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1526318472351-c75fcf070a3b?q=80&w=1200&auto=format&fit=crop";

function escapeHtml(s="") {
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function openModal(data) {
  modal.setAttribute("aria-hidden", "false");
  modalImage.src = data.coverImageURL || DEFAULT_IMAGE;
  modalTitle.textContent = data.title || "";
  modalAuthor.textContent = data.author || "";
  modalPrice.textContent = Number(data.price || 0).toFixed(2);
}

function closeModal() { modal.setAttribute("aria-hidden", "true"); }
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

function createCard(id, data) {
  const card = document.createElement("article");
  card.className = "book-card";
  const imgSrc = data.coverImageURL && data.coverImageURL.trim() ? data.coverImageURL : DEFAULT_IMAGE;

  card.innerHTML = `
    <img class="cover" src="${imgSrc}" alt="${escapeHtml(data.title)}" onerror="this.src='${DEFAULT_IMAGE}'" />
    <div class="card-body">
      <h3>${escapeHtml(data.title)}</h3>
      <p>Author: ${escapeHtml(data.author)}</p>
      <p>Price: $${Number(data.price).toFixed(2)}</p>
    </div>
    <div class="card-actions">
      <button class="update-btn">Update</button>
      <button class="delete-btn">Delete</button>
      <button class="view-btn">View</button>
    </div>
  `;

  const [updateBtn, deleteBtn, viewBtn] = card.querySelectorAll("button");

  updateBtn.addEventListener("click", async () => {
    const newAuthor = prompt("Enter new author name:", data.author || "");
    if (newAuthor && newAuthor.trim() !== data.author) {
      await updateDoc(doc(db, "books", id), { author: newAuthor.trim() });
    }
  });

  deleteBtn.addEventListener("click", async () => {
    if (confirm("Delete this book?")) {
      await deleteDoc(doc(db, "books", id));
    }
  });

  viewBtn.addEventListener("click", () => openModal(data));
  return card;
}

// Real-time listener
const booksCol = collection(db, "books");
const orderedQuery = query(booksCol, orderBy("title"));
onSnapshot(orderedQuery, snapshot => {
  booksContainer.innerHTML = "";
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const card = createCard(docSnap.id, data);
    booksContainer.appendChild(card);
  });
});

// Add book
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const cover = document.getElementById("coverImageURL").value.trim() || DEFAULT_IMAGE;

  if (!title || !author || Number.isNaN(price)) { alert("Enter valid title, author, price."); return; }

  await addDoc(collection(db, "books"), { title, author, price, coverImageURL: cover });
  addBookForm.reset();
});
