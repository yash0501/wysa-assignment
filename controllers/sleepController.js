const mongoose = require("mongoose");
const { Sleep } = require("../models");

const sleepController = {
  async updateSleepStruggle(req, res) {
    try {
      const { sleepStruggle, userId, dataCollectionStage } = req.body;

      // create new sleep entry if not exist
      const sleep = await Sleep.findOne({ userId });
      if (!sleep) {
        const newSleep = new Sleep({
          userId,
          sleepStruggle,
          dataCollectionStage,
        });
        const savedSleep = await newSleep.save();
        return res.status(200).json(savedSleep);
      }
      // update sleep entry if exist
      else {
        const updatedSleep = await Sleep.findOneAndUpdate(
          { userId },
          { sleepStruggle },
          { new: true }
        );
        return res.status(200).json({
          status: "success",
          data: updatedSleep,
          message: "Sleep struggle updated successfully",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateSleepTime(req, res) {
    try {
      const { sleepTime, userId, dataCollectionStage } = req.body;

      let sleepAt = new Date(sleepTime * 1000);
      console.log(sleepAt);

      // update sleep entry
      const updatedSleep = await Sleep.findOneAndUpdate(
        { userId },
        {
          sleepTime: sleepAt,
          dataCollectionStage,
        },
        { new: true }
      );
      return res.status(200).json({
        status: "success",
        data: updatedSleep,
        message: "Sleep time updated successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateWakeTime(req, res) {
    try {
      const { wakeTime, userId, dataCollectionStage } = req.body;

      let wakeAt = new Date(wakeTime * 1000);
      // update sleep entry
      const updatedSleep = await Sleep.findOneAndUpdate(
        { userId },
        {
          wakeTime: wakeAt,
          dataCollectionStage,
        },
        { new: true }
      );
      return res.status(200).json({
        status: "success",
        data: updatedSleep,
        message: "Wake time updated successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateSleepDuration(req, res) {
    try {
      const { sleepDuration, userId, dataCollectionStage } = req.body;

      //  calculate sleep quality on the basis of sleep duration, sleep struggle, sleep time and wake time

      let sleepQuality = 0;
      if (sleepDuration >= 6 && sleepDuration <= 8) {
        sleepQuality += 50;
      } else if (sleepDuration > 8) {
        sleepQuality += 100;
      } else if (sleepDuration < 6) {
        sleepQuality += 25;
      }

      // update sleep entry
      const updatedSleep = await Sleep.findOneAndUpdate(
        { userId },
        {
          sleepDuration,
          dataCollectionStage,
          sleepQuality,
        },
        { new: true }
      );
      return res.status(200).json({
        status: "success",
        data: updatedSleep,
        message: "Sleep duration updated successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = sleepController;
