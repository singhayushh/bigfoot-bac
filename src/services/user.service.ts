import { UserDto } from "../dtos/user.dto";
import User from "../models/user.model";
import { Types } from "mongoose";

const createUser = async (user: UserDto) => {
    return User.create(user);
};

const fetchUserByEmail = async (
    email: string
)=> {
    return User.findOne({ email });
};

const fetchUserById = async (
    id: Types.ObjectId
) => {
    return User.findById(id);
};

const findUser = async (id: Types.ObjectId) => {
    return User.findOne({ _id: id }).select("-password");
};

const fetchContributingUsers = async () => User.find({ hasContributed: true });

export {
    createUser,
    fetchUserByEmail,
    fetchUserById,
    findUser,
    fetchContributingUsers
};
