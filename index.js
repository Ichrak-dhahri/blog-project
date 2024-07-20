import express from 'express'
import { dbconnction } from './databases/dbconnection.js'
import userRouter from './src/modules/user/user.routes.js'
const app = express()
const port = 3000


app.use(express.json())
app.use(userRouter)
dbconnction()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
