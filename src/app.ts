import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from AutoSpa server");
});

export default app;
