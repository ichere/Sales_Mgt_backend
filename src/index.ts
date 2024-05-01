
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
connectToDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Sales Management System: Phase 1");
});

app.listen(port, () => {
  console.log(`[server]: Our server is running at http://localhost:${port}`);
});