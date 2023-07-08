import { Model, model, Schema } from "mongoose";
import { TaskSchemaDto } from "../dtos/task.dto";

const taskSchema: Schema<TaskSchemaDto> = new Schema(
    {
        title: String,
        description: String,
        rank: Number,
        image: String,
    },
    {
        timestamps: true,
    }
);

const Task: Model<TaskSchemaDto> = model("Task", taskSchema);

export { Task };