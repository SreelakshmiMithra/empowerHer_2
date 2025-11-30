// 1️ Select the <h1> element by id and change its text when clicked
const heading = document.getElementById("main-heading");
heading.addEventListener("click", () => {
    heading.textContent = "Welcome to the DOM World!";
});

// Select all <p> elements and set text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

// Use querySelector to select the first div with class 'container' and change its background
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
