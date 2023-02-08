import express from "express";
import { Router } from "express";
import {
  GetAllUser,
  GetsingleUser,
  LoginUser,
  RegisterUser,
} from "../controller/User.controller";

const UserRouter = Router();

UserRouter.route("/").get(GetAllUser);
UserRouter.route("/getsingle").get(GetsingleUser);
UserRouter.route("/getsingle/:ID").get(GetsingleUser);
UserRouter.route("/register").post(RegisterUser);
UserRouter.route("/Login").post(LoginUser);

export default UserRouter

