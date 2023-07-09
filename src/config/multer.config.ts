import { Request } from "express";
import multer from "multer";
import { storage } from "./cloudinary.config";

const allowedMimeTypes: string[] = [
    "image/png",
    "image/jpg",
    "image/jpeg"
];

const multerOptions: multer.Options = {
    storage,
    fileFilter: (_req: Request, file: Express.Multer.File, cb) => {
        if (allowedMimeTypes.includes(file.mimetype.toLowerCase()))
            cb(null, true);
        else {
            cb(null, false);
            const err = new Error(
                "Only .png, .jpg, .jpeg .gif and .tiff format allowed!"
            );
            err.name = "ExtensionError";
            return cb(err);
        }
    },
};

const upload = multer(multerOptions);

export { upload };