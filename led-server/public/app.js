// const { response } = require("express");

// Connect buttons
const ledOnButton = document.getElementById("led-on");
const ledOffButton = document.getElementById("led-off");
const statusText = document.getElementById("status");

// Setting state LED
function updateStatus() {
  fetch("/led-status")
    .then((response) => response.json())
    .then((data) => {
      statusText.textContent = `State: ${data.status}`;
    });
}

// Event listeners for buttons
ledOnButton.addEventListener("click", () => {
  fetch("/led-on", { method: "POST" }).then(() => updateStatus());
});

ledOffButton.addEventListener("click", () => {
  fetch("/led-off", { method: "POST" }).then(() => updateStatus());
});
