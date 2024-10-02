import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true

        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId, //means you are giving refernece of any file
            ref:"User"
        },
        subTodo:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Sub_todo"
        }]
},{timestamps:true}
)

export const Todo = mongoose.model("Todo", todoSchema)