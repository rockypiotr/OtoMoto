import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./router/auth.router";
import { dbConnect } from "./config/database.config";
import auctionRouter from "./router/auction.router";

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
app.use("/api/auction", auctionRouter);

app.listen(port, () => {
  console.log("Website served on ", port, new Date());
});
