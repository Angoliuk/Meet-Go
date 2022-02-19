import express from "express";
import mongoose from "mongoose";
import { DB_URL, PORT } from "./config.js";
import AuthRouter from "./Routers/AuthRouter.js";
import EventRouter from "./Routers/EventRouter.js";
import UserRouter from "./Routers/UserRouter.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", UserRouter);
app.use("/auth", AuthRouter);
app.use("/events", EventRouter);

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Loading on ${PORT}...`));
  } catch (e) {
    console.log(e);
  }
}

start();
