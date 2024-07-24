import { userModel } from "../../../models/user.model.js"
import bcrypt from "bcrypt";
/** 
 * find() taaml search alkolchy , return table  
 * findOne() =>object /null 
 * findById()
 * 
 * 
 * */ 
//nhot fyha l methods taai 
const signUp =async (req,res) => {
  const  {name,email ,password } =req.body;
  const user =await userModel.findOne({email})
  if (user){
    return res.json({ message:"user already exists"})
  } else {
    const hash = bcrypt.hashSync(myPlaintextPassword, 8);
    await userModel.insertMany({name,email ,password:hash })

  res.json({message : "succes u just create new user" })
  }
 //let users =await userModel.find({_id:"669be613fc81f1aa56b3b750"}).select({name:1})

}

//refactor ==> clean code 
const signIn =async (req,res) => {
  const  {name,email ,password } =req.body;
  const user =await userModel.findOne({email})
  if (user && bcrypt.compareSync(password, user.password) ){

    

  res.json({message:"login with token "}) 

 
 }else{
  res.json({message:"user not found or  password incorrect  "})
 }

  
  

}

export{signUp,signIn}
