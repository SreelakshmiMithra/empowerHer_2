// Select elements
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

// Function to create a new task
function createTask(taskText) {
    const li = document.createElement('li');

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        span.classList.toggle('completed'); // Toggle completed style
    });
    li.appendChild(completeBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Remove the task from the list
    });
    li.appendChild(deleteBtn);

    // Append the task to the list
    taskList.appendChild(li);
}

// Event listener for adding tasks
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!'); // Edge case: empty input
        return;
    }

    createTask(taskText);
    taskInput.value = ''; // Clear input field
    taskInput.focus();
});
