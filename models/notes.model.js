import mongoose from "mongoose";
 
const noteSchema= mongoose.Schema({
    title:String,
    desc:String ,
    createdBy: mongoose.SchemaTypes.ObjectId

});

 const noteModel= mongoose.model('note ', noteSchema)
 export {noteModel} 