import { Types } from "mongoose";
import { SubmissionDto } from "../dtos/submission.dto";
import { Submission } from "../models/submission.model";

const CreateSubmission = async (createSubmissionDto: SubmissionDto) => {
    return Submission.create(createSubmissionDto);
};

const FetchAllSubmissions = async (user?: Types.ObjectId) => {
    if (user) return Submission.find({ user }).sort({ createdAt: 1 }).populate([
        {
            path: "user", select: "-password"
        },
        {
            path: "task"
        }
    ]);
    return Submission.find().sort({ createdAt: 1 }).populate([
        {
            path: "user", select: "-password"
        },
        {
            path: "task"
        }
    ]);
};

const FetchSubmissionById = async (
    id: Types.ObjectId
) => {
    return Submission.findById(id).populate([
        {
            path: "user", select: "-password"
        },
        {
            path: "task"
        }
    ]);
};

export {
    CreateSubmission,
    FetchAllSubmissions,
    FetchSubmissionById,
};
