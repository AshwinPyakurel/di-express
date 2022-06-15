import { injectable } from "tsyringe";
import PostSI from "../interfaces/post.interace";
import PostModel from "../models/post.model";
import BaseService from "./base.service";

@injectable()
export default class PostService extends BaseService<PostSI>{
    constructor(modelI?: PostModel){
        super(modelI);
    }
}