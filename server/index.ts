import express,{Application,Request,Response} from "express"
import "./config/db"
import cors from "cors"
import UserRouter from "./router/User.Router"
import TaskRouter from "./router/Task.router"

const Port :number = 9090
const app:Application = express ()

app.use(cors())
app.use(express.json())

app.use("/api", UserRouter)
app.use("/api/tasks", TaskRouter)

app.get("/",(req:Request,res:Response)=>{
console.log("Welcome to Mircosoft To do List")
})



app.listen(Port ,()=>{
    console.log("Server is upa nd running", Port)
})