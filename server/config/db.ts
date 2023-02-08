import mongoose from "mongoose"

const DB_connect : string = "mongodb://localhost/mircosoft"

mongoose.connect(DB_connect)

mongoose.connection
.on("open",()=>{
console.log("Database is conected")
})

.once("error",()=>{
    console.log("An error occurred while connecting to database")
})

