const express = require("express");
const { Gpio } = require("onoff");

const app = express();
const port = 3000;

const led = new Gpio(17, "out");

app.get("/", (req, res) => {
  res.send(`
    <h1>LED ovladanie</h1>
    <a href="/on">Zapni LED</a><br/>
    <a href="/off">Vypni LED</a>
    `);
});

app.get("/on", (req, res) => {
  led.writeSync(1);
  res.send('LED je zapnuta. <a href="/">Spat</a>');
});

app.get("/off", (req, res) => {
  led.writeSync(0);
  res.send('LED je vypnuta. <a href="/">Spat</a>');
});

process.on("SIGINT", () => {
  led.unexport();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server beží na http://raspberrypi.local:${port}`);
});
