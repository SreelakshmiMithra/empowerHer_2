# Enhanced Todo List Application

This is a simple and interactive **Todo List Web Application** built using **HTML, CSS, and JavaScript**.  
It allows users to add tasks, mark them as completed, delete tasks, and search through tasks in real-time.  
All tasks are stored in **localStorage**, so the data remains even after reloading the page.

---

## 🚀 Features

### ✔ Add Tasks
Users can add new tasks using the input box.

### ✔ Mark Tasks as Completed
Click the **✔ button** next to a task to mark it as completed.  
Completed tasks appear with a line-through.

### ✔ Delete Tasks
Click the **✖ button** to remove a task from the list.

### ✔ Real-Time Search
The search bar filters tasks instantly as the user types.

### ✔ Persistent Storage
All tasks (with completion status) are stored in **localStorage** as a JSON array:
```json
[
  {
    "id": 1736071944031,
    "text": "Buy groceries",
    "completed": false
  }
]