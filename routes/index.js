const express = require("express");
const router = express.Router();
const { sleepController, userController } = require("../controllers");

// user registration
router.post("/register", userController.registerUser);

// sleep data collection
router.post("/sleepStruggle", sleepController.updateSleepStruggle);
router.post("/sleepTime", sleepController.updateSleepTime);
router.post("/wakeTime", sleepController.updateWakeTime);
router.post("/sleepDuration", sleepController.updateSleepDuration);

// router.get("/sleepQuality", sleepController.getSleepQuality);

module.exports = router;
