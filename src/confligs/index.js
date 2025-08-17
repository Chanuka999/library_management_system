import dotenv from "dotenv";
dotenv.config();

const config = {
  databaseConnections: process.env.MONGODB_URL,
};

export default config;
