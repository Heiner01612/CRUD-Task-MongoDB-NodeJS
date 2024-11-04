import { config } from "dotenv";

config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";
export const MONGO_PORT = process.env.MONGO_PORT || 5000;