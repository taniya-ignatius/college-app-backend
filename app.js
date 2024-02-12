const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const StudentRouter=require("./controllers/StudentRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/student",StudentRouter)

mongoose.connect("mongodb+srv://Taniya12:TAN12122001@cluster0.vfq897t.mongodb.net/collegeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.listen(3002,()=>{
    console.log("Server running")
})