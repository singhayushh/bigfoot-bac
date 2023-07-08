import { Types, Document } from "mongoose";

type SubmissionDto = {
    user: Types.ObjectId;
    file?: string;
    comment?: string;
    task: Types.ObjectId;
    dateOfCompletion: Date;
};

type SubmissionSchemaDto = SubmissionDto & Document;

export { SubmissionDto, SubmissionSchemaDto };