import {noteModel } from "../../../models/notes.model.js"


const addNote =async (req,res) => {
 const  {title,desc ,createdBy} =req.body;

    await noteModel.insertMany({title,desc ,createdBy })

  res.json({message : "success u just create new note" })

}

const findNote =async (req,res) => {
  const  {title,desc ,createdBy} =req.body;
 
  let notes =await noteModel.find({_id:"669ec403c4f3e2d7cb0508a5"}).select({title:1})
 
   res.json({message : "here is the note u searching for",notes })
 
 }
 // update 
 const updateNote = async (req, res) => {
  //const {  title, desc, createdBy } = req.body;

  try {
   
    let  newnote = await noteModel.findByIdAndUpdate(
      {_id: "669ec403c4f3e2d7cb0508a5"},{title:"new title 1 " }
      
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note updated successfully",newnote});
  } catch (error) {
    res.status(500).json({ message: "Error updating note", error });
  }
};
const deleteNote =async (req,res)=>{
  try {
   
    let  newnote = await noteModel.findByIdAndDelete(
      {_id: "66a1781166773cef0977cd7e"}
      
    );

    if (!note) {
      return res.json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully",newnote});
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error });
  }
}
export {addNote ,findNote , updateNote,deleteNote}