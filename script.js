const submitBtn = document.getElementById('submitBtn');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');

// Function to show the popup
function showPopup(message) {
    popupMessage.textContent = message;
    popup.classList.add('visible');
}

// Function to close the popup
closePopup.addEventListener('click', () => {
    popup.classList.remove('visible');
});

// Form validation and submission
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value.trim();
    '9'
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        showPopup("Please fill in all fields.");
    } else {
        showPopup("Message sent successfully!");
    }
});