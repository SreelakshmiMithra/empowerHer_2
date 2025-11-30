// Select DOM elements
const colorInput = document.querySelector('#colorInput');
const textInput = document.querySelector('#textInput');
const bgButton = document.querySelector('#bgBtn');
const textButton = document.querySelector('#textBtn');
const myDiv = document.querySelector('#myDiv');
// Function to validate color names
function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}
// Event listener for changing background color
bgButton.addEventListener('click', function() {
    const color = colorInput.value.trim();
    
    if (color === '' || !isValidColor(color)) {
        alert('Invalid color name!');
        return;
    }

    myDiv.style.backgroundColor = color;
});
// Event listener for changing text content
textButton.addEventListener('click', function() {
    const text = textInput.value.trim();

    if (text === '') {
        alert('Please enter some text!');
        return;
    }

    myDiv.textContent = text;
});
