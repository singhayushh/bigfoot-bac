type TaskDto = {
    title: string;
    description: string;
    image: string;
    rank: number;
};

type TaskSchemaDto = TaskDto & Document;

export { TaskSchemaDto, TaskDto };