import { NextFunction, Request, Response } from "express";
import { GenerateResponse } from "../utils/response.creator";

const ErrorHandler = (
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    return GenerateResponse(res, 500);
};

export { ErrorHandler };