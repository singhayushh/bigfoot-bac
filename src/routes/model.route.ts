import { Router } from "express";
import { Predict } from "../controllers/model.controller";
const modelRouter: Router = Router();

modelRouter.post("/predict", Predict);

export { modelRouter };