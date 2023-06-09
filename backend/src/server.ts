import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./router/auth.router";
import { dbConnect } from "./config/database.config";
import auctionRouter from "./router/auction.router";
import uiSettingsRouter from "./router/uiSettings.router";
import jwt from "jsonwebtoken";

require("dotenv").config();
dbConnect();
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use((req, res, next) => {
  const token = req.headers.authorization?.substring(7);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || "");
    next();
  } catch (e) {
    res.status(401).send({ message: "Invalid token. Unauthorized access" });
  }
});
app.use("/api/auction", auctionRouter);
app.use("/api/uisettings", uiSettingsRouter);

app.listen(port, () => {
  console.log("Website served on ", port, new Date());
});
