import { Types } from "mongoose";
import { TaskDto } from "../dtos/task.dto";
import { Task } from "../models/task.model";

const CreateTask = async (createTaskDto: TaskDto) => {
    return Task.create(createTaskDto);
};

const FetchAllTasks = async ()=> {
    return Task.find().sort({ createdAt: 1 });
};

const FetchTaskById = async (
    id: Types.ObjectId
) => {
    return Task.findById(id);
};

export {
    CreateTask,
    FetchAllTasks,
    FetchTaskById,
};
