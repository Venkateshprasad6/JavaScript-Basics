// Get a reference to a DOM element (for example, a div with id="myDiv")
const element = document.getElementById('myDiv');

// Example of innerHTML
element.innerHTML = '<strong>Bold Text</strong>'; // Renders as bold text
console.log(element.innerHTML); // Logs: <strong>Bold Text</strong>

// Example of textContent
element.textContent = 'Bold Text'; // Renders as plain text
console.log(element.textContent); // Logs: <strong>Bold Text</strong>
