const express=require("express")
const bcrypt=require("bcryptjs")
const studentModel=require("../model/StudentModel")

const router=express.Router()

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addstudent",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password

    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let student=new studentModel(data)
    let result=await student.save()
    res.json({
        status:"success"
    })
})

router.get("/viewstudent",async(req,res)=>{
    let data=await studentModel.find()
    res.json(data)
})

module.exports=router