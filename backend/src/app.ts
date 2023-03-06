import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  getAllMessages,
  getAllReviews,
  postMessage,
  postReview,
} from "./messageHandlers";

import {
  hashPassword,
  getUserByEmailWithpassowrdAndPassToNext,
  verifyPassword,
  verifyToken,
} from "./auth";

import {
  postUser,
  deleteUser,
  putUser,
  validateUser,
  getUsers,
  getUsersByEmail,
} from "./userHandlers";

dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5050", 10);

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/messages", postMessage);
app.get("/api/messages", getAllMessages);
app.post("/api/reviews", postReview);
app.get("/api/reviews", getAllReviews);

app.post("/api/login", getUserByEmailWithpassowrdAndPassToNext, verifyPassword);
app.post("/api/users", hashPassword, postUser);
app.get("/api/users", getUsers);
app.get("/api/user", getUsersByEmail);

app.use(verifyToken);

app.put("/api/users/:id", validateUser, putUser);
app.delete("/api/users/:id", deleteUser);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});
