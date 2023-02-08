import {Request,Response} from "express"
import UserModel from "../model/UserModel"

const GetAllUser = async (req:Request,res:Response) => {
    try {
        const getUsers = await UserModel.find()
        return res.status(200).json({
            message:"A User was found successfuly",
            data:getUsers
        })
    } catch (error) {
        return res.status(404).json({
            message:"an eror occured "
        })
    }
}



const GetsingleUser = async (req:Request,res:Response):Promise<Response> =>{
    try {
        const GetOneUser = await UserModel.findById(req.params.ID).populate([
          
        ]);

        return res.status(200).json({
            message:"Single user gotten",
            data:GetOneUser
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured"
        })
    }
}


const RegisterUser = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {name,email,password} = req.body

        const user = await UserModel.findOne({email})
        if(user){
            return res.status(200).json({
                message:"User Already Existed",
                data:user
            });
        } else{
            const createUser = await UserModel.create({
                name,
                email,
                password
            })
            return res.status(200).json({
                message:"Scuccessfully created a user",
                data:createUser
            });
        }
        
    }catch{
        return res.status(404).json({
            message:"An error occurred"
        })
    }
}


const  LoginUser = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {email}= req.body
        const user = await UserModel.findOne({email})
        if (user) {
            return res.status(404).json({
                message:`Welcome ${user.name}`,
                data:user,
            });
        } else {
            return res.status(404).json({
                message:"user with this email does not exist"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"An error occurred while creating the user"
        })
    }
}

export { GetAllUser,GetsingleUser,RegisterUser,LoginUser};