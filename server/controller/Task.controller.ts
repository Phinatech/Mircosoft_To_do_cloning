import {Request,Response} from "express"
import mongoose from "mongoose"
import TaskModel from "../model/Taskmodel"
import UserModel from "../model/UserModel"

const GetOne =async (req:Request,res:Response):Promise<Response> => {
    const GettingOne = await TaskModel.find()
    return res.status(200).json({
        message:"Data Found",
        data:GettingOne
    })
}

const CreateTask =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getUser = await UserModel.findById(req.params.UserID);
        if(getUser){
            const {title,date}= req.body;
            let myDate = Date.now().toLocaleString();

            const CreatingTask = await TaskModel.create({
              title,
              date:date ? date : myDate,
              remainder:"",
              status:false,
              note:"",
            });

            await getUser?.myDay?.push(new mongoose.Types.ObjectId(CreatingTask!._id));
            await getUser?.task?.push(new mongoose.Types.ObjectId(CreatingTask!._id));
            getUser.save();

            return res.status(200).json({
                mesage:"Successfully Created",
                data:CreatingTask
            })
        }else{
            return res.status(404).json({
                message:"User not found"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"An error Occured",
            data:error
        })
    }
}

export {GetOne,CreateTask,}