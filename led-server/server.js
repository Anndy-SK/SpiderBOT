const express = require("express");
const { Gpio } = require("onoff");

const app = express();

const PORT = process.env.PORT || 3000;
const led = new Gpio(17, "out");
const button = new Gpio(27, "in", "both");

// Setting CORS for frontend
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Server static files (HTML, CSS, JS)
app.use(express.static("public"));

// Variable for button state
let buttonState = "NOT PRESSED";

// Monitor the button state
button.watch((err, value) => {
  if (err) {
    console.error("Error watching the button:", err);
    return;
  }

  buttonState = value === 0 ? "PRESSED" : "NOT PRESSED"; // 1 = pressed, 0 = not pressed
});

// Endpoints for handling with LEDs
app.post("/led-on", (req, res) => {
  led.writeSync(1);
  res.send({ status: "LED is ON" });
});

app.post("/led-off", (req, res) => {
  led.writeSync(0);
  res.send({ status: "LED is OFF" });
});

app.get("/led-status", (req, res) => {
  const ledState = led.readSync();
  const status = ledState === 1 ? "ON" : "OFF";
  res.json({ status: status });
});

// Endpoint for handling with BUTTON:
app.get("/button-status", (req, res) => {
  res.json({ status: buttonState });

  // try {
  // const value = button.readSync();
  // res.send({ status: value === 1 ? "PRESSED" : "NOT PRESSED" });
  // } catch (err) {
  // console.error("Error reading button state:", err);
  // res.status(500).send({ status: "ERROR", message: err.message });
  // }
});

// ochrana pri kill ctrl+c
process.on("SIGINT", () => {
  led.unexport();
  button.unexport();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`The server is starting on https://192.168.137.138:${PORT}`);
});
