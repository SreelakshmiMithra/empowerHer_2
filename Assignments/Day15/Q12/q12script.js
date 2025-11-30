// Select the ul and button
const ul = document.querySelector('#myList');
const button = document.querySelector('#addBtn');

// Add click event to button
button.addEventListener('click', function() {
    // Create new li element
    const li = document.createElement('li');
    
    // Set the text content
    li.textContent = `New Item`;

    // Determine current li sequence
    const liCount = ul.children.length + 1; // +1 because this is the new li

    // Apply styling based on sequence number
    if(liCount % 2 === 1) {
        li.classList.add('odd');
    } else {
        li.classList.add('even');
    }

    // Append li to ul
    ul.appendChild(li);
});
