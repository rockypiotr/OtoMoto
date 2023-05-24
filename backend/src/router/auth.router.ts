import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AccountModel } from "../models/account.model";
import jwt from "jsonwebtoken";

const router = Router();

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const account = await AccountModel.findOne({ username: username });

    if (!account || account.password !== password) {
      res.status(401).json("Invalid username or password");
    }

    const token = jwt.sign({ token: account!._id }, "2zmpDOsuTErTXAp", {
      expiresIn: "10m",
    });
    res.json({ token: token });
  })
);

export default router;
