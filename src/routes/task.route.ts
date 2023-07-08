import { Router } from "express";
import { Create, FetchAll, FetchById } from "../controllers/task.controller";
const taskRouter: Router = Router();

taskRouter.post("/", Create);

taskRouter.get("/", FetchAll);
taskRouter.get("/:id", FetchById);

export { taskRouter };