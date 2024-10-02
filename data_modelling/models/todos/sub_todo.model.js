import mongoose from "mongoose";

const sub_todoSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true}


)

export const Sub_todo = new mongoose.model('Sub_todo', sub_todoSchema)