const express = require("express");
const { Gpio } = require("onoff");

const app = express();

const PORT = 3000;
const led = new Gpio(17, "out");

// Setting CORS for frontend
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Server static files (HTML, CSS, JS)
app.use(express.static("public"));

// Endpoints for handling with LEDs
app.get("/led/on", (req, res) => {
  led.writeSync(1);
  res.send({ status: "LED is ON" });
});

app.get("/led/off", (req, res) => {
  led.writeSync(0);
  res.send({ status: "LED is OFF" });
});

// ochrana pri kill ctrl+c
process.on("SIGINT", () => {
  led.unexport();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`The server is starting on https://192.168.137.138:${PORT}`);
});
