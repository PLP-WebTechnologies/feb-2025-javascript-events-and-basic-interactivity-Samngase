// 1. Event Handling

// Button click event
document.getElementById("changeTextBtn").addEventListener("click", function() {
    this.textContent = "Clicked!"; // Change text on click
    this.style.backgroundColor = "green"; // Change color
});

// Hover effect
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keyup", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Secret button - Double click or long press
let pressTimer;
document.getElementById("secretBtn").addEventListener("mousedown", function() {
    pressTimer = setTimeout(() => {
        alert("Long Press Detected!");
    }, 1000); // Trigger after 1 second
});

document.getElementById("secretBtn").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
});

document.getElementById("secretBtn").addEventListener("dblclick", function() {
    alert("Double-click Detected!");
});

// 2. Interactive Elements - Image Gallery (Click to enlarge)
document.querySelectorAll(".galleryImg").forEach(img => {
    img.addEventListener("click", function() {
        alert(`You clicked on ${this.alt}`);
    });
});

// Tabs functionality
document.querySelectorAll(".tabButton").forEach(button => {
    button.addEventListener("click", function() {
        const tabId = this.dataset.tab;
        document.querySelectorAll(".tabContent").forEach(tab => {
            tab.style.display = tab.id === tabId ? "block" : "none";
        });
    });
});

// Form Validation (Real-time feedback)
document.getElementById("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        event.preventDefault(); // Prevent form submission
    }
});