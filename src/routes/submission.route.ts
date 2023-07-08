import { Router } from "express";
import { upload } from "../config/multer.config";
import { Create, FetchAll, FetchById } from "../controllers/submission.controller";
const submissionRouter: Router = Router();

submissionRouter.post("/", upload.single("document"), Create);

submissionRouter.get("/", FetchAll);
submissionRouter.get("/:id", FetchById);

export { submissionRouter };
