import { Router } from "express";
import EventController from "../Controllers/EventController.js";

const EventRouter = new Router();

EventRouter.post("/create", EventController.create);
EventRouter.get("/getAll", EventController.getAll);
EventRouter.get("/getOne/:id", EventController.getOne);
EventRouter.put("/update/:id", EventController.update);
EventRouter.delete("/delete/:id", EventController.delete);

export default EventRouter;
