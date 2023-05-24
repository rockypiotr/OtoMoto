import { model, Schema } from "mongoose";

export interface Account {
  id: string;
  username: string;
  password: string;
  token: string;
}

export const AccountSchema = new Schema<Account>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
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

export const AccountModel = model<Account>("account", AccountSchema);
