import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import database from "./database";
import { Request, Response, NextFunction } from "express";

dotenv.config();

const hashParams = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 3,
  paralelism: 1,
};

export const hashPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  argon2
    .hash(req.body.password, hashParams)
    .then((hashedPassword) => {
      console.log(hashedPassword);
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

export const getUserByEmailWithpassowrdAndPassToNext = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  database
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then(([users]: any) => {
      if (users[0] != null) {
        req.user = users[0];

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

export const verifyPassword = (req: any, res: Response) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    .then((isVerified: boolean) => {
      if (isVerified) {
        const payload = { sub: req.user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
