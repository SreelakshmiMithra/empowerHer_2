// app.js - uses modular Firestore CDN (v12.6.0)
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const { db } = window.firebaseExports;
if (!db) {
  console.error("Firestore not found. Ensure index.html initialized Firebase and exposed window.firebaseExports.db");
}

// DOM
const booksContainer = document.getElementById("booksContainer");
const addBookForm = document.getElementById("addBookForm");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalPrice = document.getElementById("modalPrice");

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1526318472351-c75fcf070a3b?q=80&w=1200&auto=format&fit=crop";

// Seed dummy data if empty
async function seedDummyIfEmpty() {
  try {
    const booksCol = collection(db, "books");
    const q = query(booksCol, orderBy("title"));
    const snap = await getDocs(q);
    if (snap.empty) {
      const dummy = [
        { title: "Programming with Java", author: "Cay S. Horstmann", price: 29.99, coverImageURL: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop" },
        { title: "Clean Code", author: "Robert C. Martin", price: 34.50, coverImageURL: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop" },
        { title: "Eloquent JavaScript", author: "Marijn Haverbeke", price: 19.99, coverImageURL: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop" },
        { title: "You Don't Know JS", author: "Kyle Simpson", price: 24.00, coverImageURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop" },
        { title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 27.99, coverImageURL: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop" }
      ];
      for (const b of dummy) {
        await addDoc(booksCol, b);
      }
      console.log("Seeded dummy books.");
    } else {
      console.log("Books exist, skip seeding.");
    }
  } catch (err) {
    console.error("Seeding error:", err);
  }
}

// call seeder once
seedDummyIfEmpty();

// Render helper
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

  // wire buttons
  const [updateBtn, deleteBtn, viewBtn] = card.querySelectorAll("button");
  updateBtn.addEventListener("click", async () => {
    const current = data.author || "";
    const newAuthor = prompt("Enter new author name:", current);
    if (newAuthor !== null && newAuthor.trim() !== "" && newAuthor !== current) {
      try {
        await updateDoc(doc(db, "books", id), { author: newAuthor.trim() });
      } catch (err) {
        console.error("Update failed:", err);
        alert("Update failed (check console).");
      }
    }
  });

  deleteBtn.addEventListener("click", async () => {
    if (!confirm("Delete this book?")) return;
    try {
      await deleteDoc(doc(db, "books", id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed (check console).");
    }
  });

  viewBtn.addEventListener("click", () => openModal(data));

  return card;
}

// realtime listener - ordered by title
const booksCol = collection(db, "books");
const orderedQuery = query(booksCol, orderBy("title"));
onSnapshot(orderedQuery, snapshot => {
  booksContainer.innerHTML = "";
  if (snapshot.empty) {
    booksContainer.innerHTML = "<p style='color:#6b7280;padding:10px;'>No books available.</p>";
    return;
  }

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const id = docSnap.id;
    const card = createCard(id, data);
    booksContainer.appendChild(card);
  });
}, err => {
  console.error("Realtime listener error:", err);
  booksContainer.innerHTML = "<p style='color:#c02626;padding:10px;'>Error loading books. See console.</p>";
});

// Add book
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const cover = document.getElementById("coverImageURL").value.trim() || DEFAULT_IMAGE;

  if (!title || !author || Number.isNaN(price)) {
    alert("Please enter valid title, author and price.");
    return;
  }

  try {
    await addDoc(collection(db, "books"), { title, author, price, coverImageURL: cover });
    addBookForm.reset();
  } catch (err) {
    console.error("Add book failed:", err);
    alert("Add failed (see console).");
  }
});

// Modal controls
function openModal(data) {
  modal.setAttribute("aria-hidden", "false");
  modalImage.src = data.coverImageURL || DEFAULT_IMAGE;
  modalTitle.textContent = data.title || "";
  modalAuthor.textContent = data.author || "";
  modalPrice.textContent = Number(data.price || 0).toFixed(2);
}
function closeModal() {
  modal.setAttribute("aria-hidden", "true");
}
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

// misc
function escapeHtml(s="") {
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}
