import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const PORT = process.env.PORT || "8090";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Library management system api</h2>");
  next();
});

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
