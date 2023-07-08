import { Document } from "mongoose";

type UserDto = {
    name: string;
    email: string;
    password: string;
    dob: string;
    age: number;
    sex: string;
    phone: string;
    country: string;
    hasContributed: boolean;
};

type UserSchemaDto = UserDto & Document;

export { UserDto, UserSchemaDto };
