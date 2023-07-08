import { Model, model, Schema } from "mongoose";
import { SubmissionSchemaDto } from "../dtos/submission.dto";

const submissionSchema: Schema<SubmissionSchemaDto> = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: false,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: "Task",
            required: true,
            unique: false,
        },
        file: String,
        comment: String,
        dateOfCompletion: Date,
    },
    {
        timestamps: true,
    }
);

const Submission: Model<SubmissionSchemaDto> = model("Submission", submissionSchema);

export { Submission, SubmissionSchemaDto };