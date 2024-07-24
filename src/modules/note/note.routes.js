import express from "express";
import { addNote , deleteNote, findNote ,updateNote } from "./note.controller.js";
const noteRouter =express.Router()
noteRouter.post('/addNote',addNote)
noteRouter.get('/findNote',findNote)
noteRouter.get('/updateNote',updateNote)

noteRouter.get('/deleteNote',deleteNote)

export  default noteRouter 