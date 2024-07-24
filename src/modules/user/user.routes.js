import express from "express";
import { signIn, signUp } from "./user.controller.js";
const userRouter =express.Router()
userRouter.post('/singUp',signUp)
userRouter.post('/singIn',signIn)
export  default userRouter