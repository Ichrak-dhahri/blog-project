import { userModel } from "../../../models/user.model.js"
/** 
 * find() taaml search alkolchy , return table  
 * findOne() =>object /null 
 * findById()
 * 
 * 
 * */ 
//nhot fyha l methods taai 
const signUp =async (req,res) => {
   // const  {name,email ,password } =req.body;
 // await userModel.insertMany({name,email ,password })
 let users =await userModel.find({_id:"669be613fc81f1aa56b3b750"}).select({name:1})
  res.json({message : "succes u just create new user",users })
}
export{signUp}
