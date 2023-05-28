import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AccountModel } from "../models/account.model";
import jwt from "jsonwebtoken";

const router = Router();

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    try {
      const { username, password } = req.body;
      const account = await AccountModel.findOne({ username: username });

      if (!account || account.password !== password) {
        res.status(401).json("Invalid username or password");
        return;
      }

      const token = jwt.sign(
        { token: account._id },
        process.env.JWT_SECRET || "",
        {
          expiresIn: "10h",
        }
      );

      res.status(200).json(token);
      return;
    } catch (error) {
      res.status(500).send(error);
      return;
    }
  })
);

export default router;
