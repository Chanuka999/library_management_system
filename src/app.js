import express from "express";
import dotenv from "dotenv";
import logger from "./api/utils/Logger.js";
import cors from "cors";
import connect from "./api/utils/database.connection.js";

const PORT = process.env.PORT || "8090";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("<h2>Library management system api</h2>");
  next();
});

app.listen(PORT, () => {
  logger.info(`server is up and running on port ${PORT}`);
  connect();
});
