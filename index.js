import express from 'express'
import { dbconnction } from './databases/dbconnection.js'
import userRouter from './src/modules/user/user.routes.js'
import noteRouter from './src/modules/note/note.routes.js'
const app = express()
const port = 3000


app.use(express.json())
app.use(userRouter)
app.use(noteRouter)
dbconnction()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
