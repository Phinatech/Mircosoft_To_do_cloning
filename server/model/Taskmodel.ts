import mongoose,{model,Schema,Document} from "mongoose";
import { TaskData2 } from "../Interface/All.Interface";

interface NewTask extends TaskData2,Document{}

const TaskSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  remainder:{
    type:String
  },
  note:{
    type:String
  },
  status:{
    type:Boolean
  },
},{
    timestamps:true,
    versionKey:false,
}
);

const TaskModel = model<NewTask>("tasks",TaskSchema)
export default TaskModel;