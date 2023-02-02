import express from "express";

import dotenv from "dotenv";
import { getAllMessages, postMessage } from "./messageHandlers";

dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5050", 10);

const app = express();

app.use(express.json());

app.post("/api/messages", postMessage);
app.get("/api/messages", getAllMessages);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});
