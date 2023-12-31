import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/post-db",
  JWT_SECRET: process.env.DATABASE_NAME || "post-db",
};
