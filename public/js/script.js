// Get the countdown element
const countdownElement = document.getElementById('countdown');
            
// Initialize the countdown value
let countdown = 3;

// Function to update and display the countdown
function updateCountdown() {
    countdownElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
        // Redirect after the countdown reaches 0
        window.location.href = "https://google.com"; // Replace with your redirect URL
    } else {
        // Continue updating the countdown every second
        setTimeout(updateCountdown, 1000);
    }

}

// Start the countdown
updateCountdown();