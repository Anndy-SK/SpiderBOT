# 🕷️ SpiderBOT
**SpiderBOT** is a multi-sensor robotic spider designed for environmental exploration in hard-to-reach or dangerous areas.
Equipped with legged locomotion and an array of onboard sensors, SpiderBOT combines terrain mobility with real-time data collection.

## 🚀 Project Overview
SpiderBOT is a four-legged robot with articulated joints, controlled by 12 micro servo motors for fluid and adaptive movement.
Powered by a Raspberry Pi Zero W and supported by multiple sensors, the robot is designed to explore:
- Rough terrain
- Confined or collapsed environments
- Unknown areas requiring remote observation

## 🧠 Key Features
- 🤖 12 DOF legged movement (3 joints per leg)
- 📷 Visual feedback via Pi Camera (1.3 MP)
- 🛰️ GPS positioning with GT-U7
- 🧭 Electronic compass and 6DOF motion sensing
- 🌡️ Environmental monitoring (gas, sound, temperature, humidity)
- 💾 Data logging for remote telemetry or post-analysis

## 🧩 Hardware Components
| Component                | Function                                         |
|--------------------------|--------------------------------------------------|
| Raspberry Pi Zero W      | Main controller with Wi-Fi                       |
| 12x Micro Servo 9g       | Actuates spider legs (via PCA9685)              |
| PCA9685 Servo Driver     | 16-channel PWM controller for motors            |
| LM2596 Step-down         | Regulates voltage from battery (e.g., 7.4V → 5V) |
| MT3608 Step-up           | Boosts voltage where needed (e.g., 3.7V → 5V)    |
| Pi Camera Module (1.3MP) | Captures images/video from the robot’s POV       |
| GT-U7 GPS Module         | Global positioning via satellites                |
| HMC5883L Compass         | Detects magnetic orientation                     |
| MPU6500 6DOF IMU         | Acceleration and angular velocity sensing        |
| HC-SR04 Ultrasonic Sensor| Measures distances to nearby obstacles           |
| AM2320 Temp & Humidity   | Environmental data collection                    |
| MQ-2 Gas Sensor          | Detects methane, butane, LPG, smoke              |
| Sound Sensor             | Detects ambient noise levels                     |
| Adafruit Datalogger #8122| SD card logging for offline analysis             |
| Power Supply (LiPo/USB)  | Feeds system via DC-DC converters                |

## ⚙️ Functionality Overview
- **Mobility:** 4 articulated legs allow for crawling/walking motion using predefined gaits.
- **Remote Control:** Planned via Wi-Fi (web or mobile interface).
- **Sensing & Mapping:** Real-time feedback on sound, temperature, humidity, gas, orientation, and obstacles.
- **Logging:** Sensor data can be saved locally for post-mission analysis.

## 🛠️ Wiring Summary (Conceptual)
| Module                  | Interface         | Notes                              |
|-------------------------|-------------------|-------------------------------------|
| PCA9685                 | I2C (GPIO2, GPIO3)| Servo signal control                |
| Pi Camera               | CSI               | Ribbon connection                   |
| GPS GT-U7               | UART (GPIO14/15)  | May use USB-to-Serial as fallback   |
| MPU6500 + HMC5883L      | I2C               | Shared bus                         |
| HC-SR04                 | GPIO (trigger/echo)| Distance sensor                     |
| AM2320                  | I2C               | Temp + humidity                     |
| MQ-2 Gas Sensor         | Analog or digital | May require ADC breakout            |
| Sound Sensor            | Analog or digital | Noise detection                     |
| Datalogging board       | SPI               | Logs to SD card                     |
> ⚠️ Ensure common ground between all power modules and Pi.

## 📦 Planned Software Features
- REST API
- Leg calibration and gait engine
- Wi-Fi control panel or joystick input
- Real-time sensor dashboard
- Data recording (CSV/JSON to SD card)
- Autonomous exploration routines (future phase)

## 🔧 Tech Stack
SpiderBOT will be programmed using:
- Node.js – Event-driven JavaScript runtime for robotics logic
- TypeScript – Strong typing for better structure and maintainability
- onoff / pigpio / i2c-bus / serialport – For GPIO, I2C, UART communication
- Express.js (optional) – For creating a simple web-based control UI
- Socket.IO or WebSocket (optional) – For real-time robot control over Wi-Fi
- csv-writer / fs – For local sensor data logging (CSV or JSON)

## 🧪 Applications
- Terrain scouting and disaster inspection
- Educational STEM robotics
- Indoor mapping experiments
- Sensor integration testing
- Mobile weather/environmental station

## 📊 Project Status
| Area             | Progress         |
|------------------|------------------|
| Hardware Build   | ✅ In progress    |
| Software Control | 🔄 Starting soon  |
| Sensor Testing   | 🔄 Ongoing        |
| AI/Navigation    | ⏳ Future phase   |

## 🔐 License
This project is open-source and may be reused or modified for educational and non-commercial purposes. Created by AnndySK.
