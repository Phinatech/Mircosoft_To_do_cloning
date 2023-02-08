import { Router } from "express";
import express  from "express"

const TaskRouter = Router();

TaskRouter.route("/creatingTask/:UserID");

export default TaskRouter;