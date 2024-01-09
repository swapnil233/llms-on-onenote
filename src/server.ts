import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.route("/api").get((req: Request, res: Response) => {
  res.send({
    message: "Hello World!",
  });
});

// 404 Page
app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});