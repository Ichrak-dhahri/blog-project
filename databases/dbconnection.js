import mongoose from "mongoose";

export function dbconnction(){

 mongoose.connect('mongodb://127.0.0.1:27017/blog_backend')
.then(() => {console.log("db connected")})
.catch((err) => { console.log('db error'+err)}
)
}
