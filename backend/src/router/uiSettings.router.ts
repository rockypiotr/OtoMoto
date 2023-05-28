import { Router } from "express";
import asyncHandler from "express-async-handler";
import { uiSettingsModel } from "../models/uiSettings.model";

const router = Router();

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    try {
      const userId = req.params.userId;
      const userSettings = await uiSettingsModel.findOne({ userId: userId });

      if (userSettings) {
        res.status(200).send(userSettings);
        return;
      } else {
        res.status(404).send("No settings found");
      }
    } catch (error) {
      res.status(500).send(error);
      return;
    }
  })
);

router.patch(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const userId = req.body.userId;
      const currentSettings = await uiSettingsModel.findOneAndUpdate(
        { userId: userId },
        {
          theme: req.body.theme,
          fontSize: req.body.fontSize,
          scale: req.body.scale,
        },
        { new: true }
      );
      const newSettings = await uiSettingsModel.create({
        userId: req.body.userId,
        theme: req.body.theme,
        fontSize: req.body.fontSize,
        scale: req.body.scale,
      });

      if (currentSettings) {
        res.status(200).send(currentSettings);
        return;
      } else {
        res.status(201).send(newSettings);
        return;
      }
    } catch (error) {
      res.status(500).send(error);
      return;
    }
  })
);

export default router;
