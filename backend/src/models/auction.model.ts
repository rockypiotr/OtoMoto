import { model, Schema } from "mongoose";

export interface Auction {
  _id: string;
  brand: string;
  model: string;
  vin: string;
  productionYear: number;
  horsePower: number;
  mileage: number;
  engineCapacity: number;
}

export const AuctionSchema = new Schema<Auction>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    vin: { type: String, required: true },
    productionYear: { type: Number, required: true },
    horsePower: { type: Number, required: true },
    mileage: { type: Number, required: true },
    engineCapacity: { type: Number, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const AuctionModel = model<Auction>("auctions", AuctionSchema);
