import mongoose from "mongoose";
import config from "../../confligs/index.js";
import logger from "./Logger.js";

let database;

const connect = () => {
  const MONGODB_URL = config.databaseConnections;

  if (database) return;

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      database = connection;
      logger.info("database synced");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

export default connect;
// http://localhost:8090/auth/google/callback
