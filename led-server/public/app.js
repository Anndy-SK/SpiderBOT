// Connect buttons
const ledOnButton = document.getElementById("led-on");
const ledOffButton = document.getElementById("led-off");
const statusText = document.getElementById("status");
// const buttonStatusText = document.getElementById("button-status");

// Setting state LED
function updateStatus() {
  fetch("/led-status")
    .then((response) => response.json())
    .then((data) => {
      statusText.textContent = `State: ${data.status}`;
    });
}

// function updateButtonStatus() {
//   fetch("/button-status")
//     .then((response) => response.json())
//     .then((data) => {
//       buttonStatusText.textContent = `Button: ${data.status}`;
//     });
// }

// Event listeners for buttons
ledOnButton.addEventListener("click", () => {
  fetch("/led-on", { method: "POST" }).then(() => updateStatus());
});

ledOffButton.addEventListener("click", () => {
  fetch("/led-off", { method: "POST" }).then(() => updateStatus());
});

// updateStatus();
// updateButtonStatus();

// Periodically update the button state
// setInterval(() => {
//   updateButtonStatus();
// }, 500);
