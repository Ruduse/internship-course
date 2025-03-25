import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({timestamps : true})// Tự động thêm createdAt & updatedAt
export class User{
    @Prop({
        required :true
    })
    name : string;
    @Prop({
        required :true , unique : true
    })
    email : string;
    @Prop({
        default: 'user'
    })
    role : string;


}
export const UserSchema = SchemaFactory.createForClass(User)