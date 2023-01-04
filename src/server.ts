import express, { application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.status(200).json("server is here");
});

const port = process.env.PORT || 8000;

server.listen(port, () =>
  console.log("server started listening at port:", port)
);
