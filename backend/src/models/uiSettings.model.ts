import { model, Schema } from "mongoose";

export interface UiSettings {
  userId: string;
  theme: string;
  isNightMode: boolean;
  fontSize: number;
}

export const uiSettingsSchema = new Schema<UiSettings>(
  {
    userId: { type: String, required: false },
    theme: { type: String, required: true },
    isNightMode: { type: Boolean, required: true },
    fontSize: { type: Number, required: true },
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

export const uiSettingsModel = model<UiSettings>(
  "UiSettings",
  uiSettingsSchema
);
