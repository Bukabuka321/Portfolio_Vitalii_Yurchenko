import { Request, Response } from "express";

import database from "./database";

export const getAllMessages = (req: Request, res: Response) => {
  database
    .query("SELECT * FROM messages")
    .then((result) => {
      const message = result[0];
      res.json(message);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

export const postMessage = (req: Request, res: Response) => {
  const { firstname, lastname, email, number, message } = req.body;
  database
    .query(
      "INSERT INTO messages (firstname, lastname, email, number, message) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, number, message]
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the users");
    });
};
