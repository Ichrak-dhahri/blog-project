import mongoose from "mongoose";
 
const noteSchema= mongoose.Schema({
    title:String,
    desc:String ,
    createdBy: mongoose.SchemaTypes.ObjectId

});

 export const userModel= mongoose.model('note ', noteSchema)