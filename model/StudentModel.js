const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        name:String,
        rollno:String,
        admno:String,
        college:String,
        parent:String,
        mobile:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("students",studentSchema)