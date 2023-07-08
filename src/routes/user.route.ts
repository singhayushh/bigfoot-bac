import { Router } from "express";
import { CreateUser, FetchAuthenticatedUser, FetchContributedUsers, LoginUser } from "../controllers/user.controller";
import Auth from "../middlewares/authentication.middleware";

const userRouter: Router = Router();

userRouter.get("/", Auth, FetchAuthenticatedUser);

userRouter.get("/contributors", FetchContributedUsers);
userRouter.post("/register", CreateUser);
userRouter.post("/login", LoginUser);

export default userRouter;
