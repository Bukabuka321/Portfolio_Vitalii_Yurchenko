import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  getAllMessages,
  getAllReviews,
  postMessage,
  postReview,
} from "./messageHandlers";

dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5050", 10);

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/messages", postMessage);
app.get("/api/messages", getAllMessages);
app.post("/api/reviews", postReview);
app.get("/api/reviews", getAllReviews);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});
