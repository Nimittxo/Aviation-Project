// Function to toggle visibility
function toggleVisibility() {
    var element = document.getElementById("my-element");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
// Add a click event listener to a button element
var button = document.getElementById("my-button");
button.addEventListener("click", toggleVisibility);
// Access an element and modify its content
var element = document.getElementById("my-element");
element.innerHTML = "New content";
// Make a GET request to an API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // Handle the retrieved data
    })
    .catch(error => {
        // Handle errors
    });