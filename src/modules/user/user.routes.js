import express from "express";
import { signUp } from "./user.controller.js";
const userRouter =express.Router()
userRouter.get('/singUp',signUp)
export  default userRouter