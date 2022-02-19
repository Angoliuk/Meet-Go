import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const UserRouter = new Router();
UserRouter.get("/getOne/:id", UserController.getOne);
UserRouter.put("/update/:id", UserController.update);
UserRouter.delete("/delete/:id", UserController.delete);

export default UserRouter;
