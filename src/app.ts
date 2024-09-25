import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./app/routes/index";
import errorMiddleware from "./app/middlewares/error";
import { notFound } from "./app/middlewares/not-found";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Welcome To AutoSpa");
});
// 404 Handler
app.use(notFound);

app.use(errorMiddleware);

export default app;
