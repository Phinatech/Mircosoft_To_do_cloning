import mongoose,{Schema,model,Document} from "mongoose";
import { TaskData } from "../Interface/All.Interface";

interface UserData {
    name:string;
    email:string;
    password:string;
    myDay:any[];
    important:TaskData[];
    planned:TaskData[];
    assigned:TaskData[];
    task:any[];
}

interface  myData extends UserData, Document{}

const userScehma = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },

  myDay: [
    {
      type: Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],

  important:[
    {
        type:Schema.Types.ObjectId,
        ref:"tasks",
    }
  ],
  planned:[
    {
        type:Schema.Types.ObjectId,
        ref:"tasks",
    }
  ],
},
{
    timestamps:true,
    versionKey:false
,}
);

const UserModel = model<myData>("users", userScehma);

export default UserModel
