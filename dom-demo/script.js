// Selecting elements
const heading = document.getElementById("heading");
const changeTextButton = document.getElementById("changeText");
const changeColorButton = document.getElementById("changeColor");
const box = document.getElementById("box");
const addItemButton = document.getElementById("addItem");
const itemList = document.getElementById("itemList");

// Ensure elements exist before adding event listeners
if (heading && changeTextButton) {
    changeTextButton.addEventListener("click", function () {
        heading.textContent = "Welcome to JavaScript DOM!";
    });
}

if (box && changeColorButton) {
    changeColorButton.addEventListener("click", function () {
        box.style.backgroundColor = "blue";
    });
}

if (addItemButton && itemList) {
    addItemButton.addEventListener("click", function () {
        const newItem = document.createElement("li"); // Create <li>
        newItem.textContent = "New Item"; // Set text
        newItem.style.cursor = "pointer"; // Make it clickable

        // Add click event to remove item when clicked
        newItem.addEventListener("click", function () {
            itemList.removeChild(newItem);
        });

        itemList.appendChild(newItem); // Add item to list
    });
} else {
    console.error("Error: addItemButton or itemList not found.");
}
