// Function to open the popup
function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}

// Attach the click event to the clickable image
document.querySelector('.image-container a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    openPopup();
});
