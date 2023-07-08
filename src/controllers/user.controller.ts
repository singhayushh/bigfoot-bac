/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
import { Request, Response } from "express";
import { UserDto } from "../dtos/user.dto";
import * as userService from "../services/user.service";
import { GenerateResponse } from "../utils/response.creator";
import bcrypt from "bcryptjs";
// eslint-disable-next-line no-var
import jwt from "jsonwebtoken";

/**
 * Controller to create a new user with unique email generation by the system after OTP verification.
 *
 * @param {Request} req express request interface
 * @param {Response} res express response interface
 * @returns {Promise<Response>} returns status code 201, user created & a message.
 */
const CreateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user: UserDto = { ...req.body };

        // DB Call to create new user.
        const result = await userService.createUser(user);

        return GenerateResponse(res, 201, result, "Registration Successful");
    } catch (err: any) {
        if (String(process.env.DEBUG) === "TRUE") console.log(err);
        if (
            err.name === "ValidationError" ||
            err.name === "CastError" ||
            err.name === "BSONTypeError"
        )
            return GenerateResponse(res, 400, {}, "Wrong Input Format");
        return GenerateResponse(res, 500);
    }
};

/**
 * Controller to Login a user.
 *
 * @param {Request} req express request interface
 * @param {Response} res express response interface
 * @returns {Promise<Response>} returns status code 201, Authentication Token & a message.
 */
const LoginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const credentials: UserDto = { ...req.body };

        // db call to get the details of already existing user.
        const result = await userService.fetchUserByEmail(credentials.email);
        // check if such user exists.
        if (!result)
            return GenerateResponse(res, 400, {}, "User does not exist");

        // check if User is verified
        if (!result.isPhoneVerified)
            return GenerateResponse(res, 400, {}, "User not verified");

        // checking the password
        const passwordMatched = await bcrypt.compare(
            credentials.password,
            String(result.password)
        );
        if (!passwordMatched)
            return GenerateResponse(res, 400, {}, "Invalid Credentials");

        // generate authentication token
        const jwtPayLoad = { id: result._id };
        const authToken = await jwt.sign(
            jwtPayLoad,
            String(process.env.JWT_SECRET_KEY),
            {
                expiresIn: "2 days",
            }
        );

        return GenerateResponse(res, 201, { authToken }, "Login Successful");
    } catch (err: any) {
        if (String(process.env.DEBUG) === "TRUE") console.log(err);
        if (
            err.name === "ValidationError" ||
            err.name === "CastError" ||
            err.name === "BSONTypeError"
        )
            return GenerateResponse(res, 400, {}, "Invalid Credentials");
        return GenerateResponse(res, 500);
    }
};

export { CreateUser, LoginUser };
