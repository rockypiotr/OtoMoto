import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AuctionModel } from "../models/auction.model";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const auctions = await AuctionModel.find();

      if (!auctions) {
        res.status(404).send("No auctions found.");
        return;
      }

      res.status(200).send(auctions);
      return;
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const auctionId = req.params.id;
      const auction = await AuctionModel.findById(auctionId);

      if (!auction) {
        res.status(404).send("No auction found.");
        return;
      }

      res.status(200).send(auction);
      return;
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const auction = await AuctionModel.create(req.body);

      console.log(req.body);

      if (!auction) {
        res.status(400).send("Cannot create auction");
        return;
      }

      res.status(201).send(auction);
      return;
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const auctionId = req.params.id;
      const deleteAuction = await AuctionModel.findOneAndDelete({
        _id: auctionId,
      });

      if (!deleteAuction) {
        res.status(404).send("Auction not found");
        return;
      }

      res.status(200).send(deleteAuction);
      return;
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

router.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const auctionId = req.params.id;
      const updateAuction = await AuctionModel.findOneAndUpdate(
        { _id: auctionId },
        req.body,
        { new: true }
      );

      if (!updateAuction) {
        res.status(404).send("Auction not found");
        return;
      }
      res.status(200).send(updateAuction);
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

export default router;
