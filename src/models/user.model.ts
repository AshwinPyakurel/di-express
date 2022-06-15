import { Schema, Model, Mongoose, models } from "mongoose";
import { singleton } from "tsyringe";
import mongoose from "../database";
import ModelI from "../interfaces/model.interface";
import UserSI from "../interfaces/user.interface";

@singleton()
export default class UserModel implements ModelI{
    schema: Schema<any> = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        posts: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "posts"
            }]
        },          
    })
    model: Model<any, any> = mongoose.model<UserSI>("users", this.schema);

}