import { Request, Response, NextFunction } from "express";
import database from "./database";
import Joi from "joi";
import { QueryError } from "mysql2";

const userSchema = Joi.object({
  email: Joi.string().email().max(255).required(),
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstname, lastname, email } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, email },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

export const postUser = (req: Request, res: Response) => {
  const { firstname, lastname, email, hashedPassword } = req.body;
  database
    .query(
      "INSERT INTO users (firstname, lastname, email, hashedPassword) VALUES (?, ?, ?, ?)",
      [firstname, lastname, email, hashedPassword]
    )
    .then(([users]: any) => {
      res.location(`/api/users/${users.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the users");
    });
};

export const putUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, email } = req.body;

  database
    .query(
      "UPDATE users SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
      [firstname, lastname, email, id]
    )
    .then(([users]: any) => {
      if (users.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the users");
    });
};

export const deleteUser = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  database
    .query("DELETE FROM users WHERE id = ?", [id])
    .then(([users]: any) => {
      if (users.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err: QueryError) => {
      console.error(err);
      res.status(500).send("Error deleting the user");
    });
};

export const getUsers = (req: Request, res: Response) => {
  database
    .query("SELECT * FROM users")
    .then((result) => {
      const users = result[0];
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
